import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, of, map, mergeMap } from "rxjs";


@Injectable()
export class FoodEffects{
    getFood$= createEffect( ()=> 
        this.actions$.pipe(
        ofType("GET_FOODS"),
        mergeMap(action=>
            this.httpclient.get("http://localhost:3000/foods").pipe(
                map(data => ({type: 'GET_FOOD_SUCCESS', payload: data})),
                catchError(()=> of({type:"GET_FOOD_FAILED"}))
            )
        )
    ))
    constructor(
        private httpclient: HttpClient,
        private actions$: Actions // stream of all actions dispatched by application
    ){}
}