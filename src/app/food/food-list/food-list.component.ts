import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFood, MyAppState, ACTIONS,Action } from '../food-store/food.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss',
  standalone: true,
})
export class FoodListComponent implements OnInit {
  foods: Observable<Array<IFood>> | undefined;
  constructor(private store: Store<MyAppState>){
    this.foods = store.select('foods')
  }
  ngOnInit(): void {
    this.store.dispatch({type: ACTIONS.GET_FOODS})
  }
  deleteFood(food: IFood){
    let deleteAction: Action = {
      type: ACTIONS.REMOVE_FOOD,
      payload: food
    }

    this.store.dispatch(deleteAction);
  }
  
}
