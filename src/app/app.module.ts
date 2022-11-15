import { ComponentesModule } from './componentes/componentes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AdminViewModule } from './admin-view/admin-view.module';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { VeterinariaComponent } from './veterinaria/veterinaria.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MascotasComponent,
    LoginComponent,
    NosotrosComponent,
    VeterinariaComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AdminViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
