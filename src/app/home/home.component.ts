import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data!: any[];
  constructor(private inicioSvc: AuthService) {}

  ngOnInit(): void {
    this.inicioSvc.inicio().subscribe((element) => (this.data = element));
  }
}
