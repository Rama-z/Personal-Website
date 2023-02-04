import axios from "axios";

const url: string = "https://simple-private-web.vercel.app/transaction/history";
const token: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ6YW45OUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRTZWg1SG5lVndGTWIwWnhST1ZkZ0N1aTE3ZVZRT3pHM204OE11bFpTSGxJYWZBaVBNUlcxaSIsInJvbGUiOiJndWVzdCIsImlhdCI6MTY3NTQxNDA1NSwiZXhwIjoxNjc1NTAwNDU1LCJpc3MiOiJwZXJzb25hbC13ZWJzaXRlIn0.dP76nUIrjNIRPBuuV9T5PifqciFb3um-GW40vqTvS4I";
const config = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getHistory = () => axios.get(url, config(token));
