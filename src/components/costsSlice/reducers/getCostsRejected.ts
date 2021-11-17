import { costsState } from "../costsSlice";

export const getCostsRejected =(state:costsState)=>{
    state.fetchStatus = 'rejected'
}