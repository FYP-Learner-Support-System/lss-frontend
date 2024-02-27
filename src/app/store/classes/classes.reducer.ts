import { createReducer, on } from "@ngrx/store"
import { initialState } from "./classes.state"
import { addclass, fetchclass, removeclass } from "./classes.actions"

const _classesReducer = createReducer(initialState,
    on(addclass,(state:any,action:any)=>{return [...state, action.classitem]}),
    on(removeclass,(state:any,action:any)=>{return [...state, action.classitem]}),
    on(fetchclass,(state:any,action:any)=>{return action.classlist}),
)

export function classesReducer(state: any, action:any){
    return _classesReducer(state,action)
}