import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TipoMascotasService } from './tipo-mascotas.service';

describe('TipoMascotasService', () => {
  let service: TipoMascotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
    });
    service = TestBed.inject(TipoMascotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
