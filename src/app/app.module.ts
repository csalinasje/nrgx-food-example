import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule} from "@ngrx/store";
import { food_reducer } from './food/food.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FoodEffects } from './food/food.effects';
import { FoodComponent } from './food/food.component';
import { FoodListComponent } from './food/food-list/food-list.component';
import { FoodFormComponent } from './food/food-form/food-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    StoreModule.forRoot({foods: food_reducer}),
    EffectsModule.forRoot([FoodEffects])

  ],

  providers: [],
  bootstrap: [],
})
export class AppModule { }
