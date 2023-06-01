import createHttp from "./baseServices";

const http = createHttp();

export const registerUser = (data) => http.post("/user/", data);
export const loginUser = (data) => http.post("/user/login", data);
