import {create} from "zustand";
type State={ids:string[];toggle:(id:string)=>void};
export const useFavoriteStore=create<State>((set,get)=>({ids:["p2"],toggle:(id)=>set({ids:get().ids.includes(id)?get().ids.filter(x=>x!==id):[...get().ids,id]})}));
