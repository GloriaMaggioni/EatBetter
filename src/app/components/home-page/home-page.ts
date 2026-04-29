import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { HeroSection } from "../hero-section/hero-section";
import { FruitService } from '../../services/fruit-service';

@Component({
  selector: 'app-home-page',
  imports: [HeroSection, ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
