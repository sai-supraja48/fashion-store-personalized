import API from "./api";

export const getCart = async()=>{

return await API.get("/cart");

};