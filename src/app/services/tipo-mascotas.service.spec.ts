import { TestBed } from '@angular/core/testing';

import { TipoMascotasService } from './tipo-mascotas.service';

describe('TipoMascotasService', () => {
  let service: TipoMascotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoMascotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
