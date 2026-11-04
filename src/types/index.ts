export type UserRole = "buyer" | "agent";
export interface User { id:string; name:string; email:string; role:UserRole; phone?:string; avatar?:string; }
export interface Property {
  id:string; title:string; location:string; price:number; period?:string; type:string;
  beds:number; baths:number; area:number; image:string; featured?:boolean; verified?:boolean;
  description:string; agentName:string; agentAvatar:string;
}
export interface Order { id:string; propertyId:string; propertyTitle:string; amount:number; status:"Pending"|"Active"|"Completed"|"Cancelled"; date:string; agentName:string; }
export interface Conversation { id:string; name:string; preview:string; time:string; unread:number; avatar:string; property:string; }
export interface ApiResponse<T> { data:T; message?:string; }
