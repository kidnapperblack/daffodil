import { Injectable } from '@angular/core';

import { DaffModelFactory, IDaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct, DaffProductKind, DaffProductImage } from '@daffodil/product';
import {
  MockProduct,
  DaffProductKindFactory,
  DaffProductImageFactory,
} from '@daffodil/product/testing';
import { DaffUpsellProduct } from '@daffodil/upsell-products';

/**
 * Mocked DaffUpsellProduct object.
 */
export class MockUpsellProduct extends MockProduct implements DaffUpsellProduct {
  upsell: DaffProduct[] = [];

  constructor(
    productFactory: DaffProductKindFactory,
    imageFactory: DaffProductImageFactory,
  ) {
    super(imageFactory);

    this.upsell = productFactory.createMany(3);
  }
}

/**
 * Factory for creating DaffUpsellProducts.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffUpsellProductFactory extends DaffModelFactory<DaffUpsellProduct>{
  constructor(
    productKindFactory: IDaffModelFactory<DaffProductKind>,
    imageFactory: IDaffModelFactory<DaffProductImage>,
  ) {
    super(MockUpsellProduct, productKindFactory, imageFactory);
  }
}