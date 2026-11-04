import { api } from "./api";
export const favoriteService = { async list(){const {data}=await api.get("/buyer/favorites");return data;}, async add(propertyId:string){const {data}=await api.post("/buyer/favorites",{propertyId});return data;}, async remove(propertyId:string){const {data}=await api.delete(`/buyer/favorites/${propertyId}`);return data;} };
