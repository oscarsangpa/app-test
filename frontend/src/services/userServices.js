import createHttp from "./baseService";

const http = createHttp(true);

export const loginUser = (data) => http.post("/", data);
