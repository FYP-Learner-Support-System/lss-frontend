import { createReducer, on } from "@ngrx/store"
import { initialState } from "./user.state"
import { adduser, removeuser } from "./user.actions"

const _UserReducer = createReducer(initialState,
    on(adduser,(state:any,action:any)=>{return action.useritem}),
    on(removeuser,(state:any,action:any)=>{return action.useritem}),
)

export function UserReducer(state: any, action:any){
    return _UserReducer(state,action)
}