import { Component } from '@angular/core';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, RouterLink, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
