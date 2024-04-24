import { Component } from '@angular/core';
import { AppModule } from "./app.module";
import { RouterOutlet } from '@angular/router';
import { FoodComponent } from './food/food.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [AppModule, RouterOutlet,FoodComponent]
})
export class AppComponent {
  title = 'redux-food';
}
