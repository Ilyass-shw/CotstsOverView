import { costsState } from "../costsSlice";

export const getCostsPendig =(state:costsState)=>{
    state.fetchStatus = 'pending'
}