import { Component } from '@angular/core';
import { FoodListComponent } from './food/food-list/food-list.component';

@Component({
    selector: 'app-root',
    standalone:true,
    imports:[FoodListComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'redux-food';
}
