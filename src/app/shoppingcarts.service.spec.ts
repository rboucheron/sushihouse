import { TestBed } from '@angular/core/testing';

import { ShoppingcartsService } from './shoppingcarts.service';

describe('ShoppingcartsService', () => {
  let service: ShoppingcartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingcartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
