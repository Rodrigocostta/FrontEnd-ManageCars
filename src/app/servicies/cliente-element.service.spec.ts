import { TestBed } from '@angular/core/testing';

import { ClienteElementService } from './cliente-element.service';

describe('ClienteElementService', () => {
  let service: ClienteElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
