import { Component, OnInit } from '@angular/core';
import { IFood, MyAppState, Action, ACTIONS } from '../food.reducer';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-food-form',
  
  standalone: true,
  templateUrl: './food-form.component.html',
  styleUrl: './food-form.component.scss'
})
export class FoodFormComponent implements OnInit {
  food: IFood | undefined;
  foodForm: FormGroup = new FormGroup({
    id: new FormControl('food.id'),
    name: new FormControl('food.name'),
    description: new FormControl('food.description'),
    color: new FormControl('food.color'),
    group: new FormControl('food.group'),
  });

  constructor(private store: Store<MyAppState>){}
  ngOnInit(): void {
    
  }
  addFood(food:any){
    let addAction: Action ={
      type: ACTIONS.ADD_FOOD,
      payload: Object.assign({},food)
    }
    this.store.dispatch(addAction);
  }
}
