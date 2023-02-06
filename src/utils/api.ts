import axios, { AxiosResponse } from "axios";

const baseUrl: string = "https://simple-private-web.vercel.app";

const config = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Auth
export const authLogin = (body: object): Promise<AxiosResponse<any, any>> => {
  return axios.post(`${baseUrl}/auth/login`, body);
};

// User
export const getHistory = (token: string): Promise<AxiosResponse<any, any>> => {
  return axios.get(`${baseUrl}/transaction/history`, config(token));
};
