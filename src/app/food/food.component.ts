import { Component } from '@angular/core';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodFormComponent } from './food-form/food-form.component';

@Component({
    selector: 'app-food',
    standalone: true,
    imports:[ FoodListComponent, FoodFormComponent],
    templateUrl: './food.component.html',
    styleUrl: './food.component.scss',
})
export class FoodComponent {

}
