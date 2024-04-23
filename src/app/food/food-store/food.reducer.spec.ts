import { log } from "console";
import {ACTIONS, IFood, food_reducer, Action} from "./food.reducer"
describe('Food reducer', ()=>{
    it('should add food to new state', ()=>{
        let initialState: Array<IFood> = [];
        let apple: IFood ={
             id:0,
             name:"apple",
             description: "crunchy and fibrous",
             color: "red",
             group: "fruit"
    }
    let addAction: Action = {
        type: ACTIONS.ADD_FOOD,
        payload: apple
    }
    let newState = food_reducer(initialState,addAction);

    expect(initialState.length).toBe(0);
    expect(newState.length).toBe(1);
    expect(newState[0].name).toContain("apple")
})


it('should remove an existing foof from state',()=>{
    let initialState: Array<IFood> = [];
    let apple: IFood ={
         id:0,
         name:"apple",
         description: "crunchy and fibrous",
         color: "red",
         group: "fruit"
}
let banana: IFood ={
    id:0,
    name:"banana",
    description: "crunchy and fibrous",
    color: "yellow",
    group: "fruit"
}
let firstUpdateState = food_reducer(initialState, {type: ACTIONS.ADD_FOOD, payload: apple})
let secondUpdateState = food_reducer(initialState, {type: ACTIONS.ADD_FOOD, payload: banana})
expect(initialState.length).toBe(0);
expect(firstUpdateState.length).toBe(1);
expect(secondUpdateState.length).toBe(2);

let thirUpdatedState = food_reducer(secondUpdateState, {type: ACTIONS.REMOVE_FOOD, payload: {id:0}})
expect(thirUpdatedState.length).toBe(1);
console.log(firstUpdateState);
console.log(secondUpdateState);
console.log(thirUpdatedState);
})
})