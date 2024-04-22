import { createReducer, on } from "@ngrx/store"
import { initialState } from "./materials.state"
import { addMaterial } from "./materials.actions"

const _materialsReducer = createReducer(initialState,
    on(addMaterial,(state:any,action:any)=>{return action.materialList}),
)

export function materialsReducer(state: any, action:any){
    return _materialsReducer(state,action)
}