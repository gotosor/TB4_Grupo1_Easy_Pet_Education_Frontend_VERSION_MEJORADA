import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoMascotasService } from '../services/tipo-mascotas.service';

import { MascotasComponent } from './mascotas.component';
import { FormsModule } from '@angular/forms';

describe('MascotasComponent', () => {
  let component: MascotasComponent;
  let fixture: ComponentFixture<MascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MascotasComponent],
      imports: [HttpClientModule, RouterTestingModule, FormsModule],
      providers: [TipoMascotasService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
