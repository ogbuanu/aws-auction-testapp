import { auctions } from "../constants/auctions";

export async function handler(event: any) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v3! Your function executed successfully!",
      data: auctions,
    }),
  };
}
