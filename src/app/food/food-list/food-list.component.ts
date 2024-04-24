import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFood, MyAppState, ACTIONS,Action } from '../food.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-food-list',
  
  standalone: true,
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent implements OnInit {
  foods: Observable<Array<IFood>> | undefined;
  constructor(private store: Store<MyAppState>){
    
  }
  ngOnInit(): void {
    this.foods = this.store.select('foods')
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
