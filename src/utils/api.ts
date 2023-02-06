import axios, { AxiosResponse } from "axios";

// const baseUrl: string = "https://simple-private-web.vercel.app";
const baseUrl: string = "http://localhost:8050";
const url: string = "https://simple-private-web.vercel.app/transaction/history";
// const token: string =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ6YW45OUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRTZWg1SG5lVndGTWIwWnhST1ZkZ0N1aTE3ZVZRT3pHM204OE11bFpTSGxJYWZBaVBNUlcxaSIsInJvbGUiOiJndWVzdCIsImlhdCI6MTY3NTY1NTIxNywiZXhwIjoxNjc1NzQxNjE3LCJpc3MiOiJwZXJzb25hbC13ZWJzaXRlIn0.aZnhzXVnzfdgYBTSxhgUxyh2IkNWp9JN3BD6k4KheoM";
const config = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Auth
export const authLogin = (body: object): Promise<AxiosResponse<any, any>> => {
  console.log(typeof body);
  console.log(body);
  return axios.post(`${baseUrl}/auth/login`, body);
};

// User
export const getHistory = (token: string) => {
  return axios.get(`${baseUrl}/transaction/history`, config(token));
};
