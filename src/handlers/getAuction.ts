import { auctions } from "../constants/auctions";

export async function handler(event: any) {
  const auctionId = event.pathParameters.id;
  console.log(event);
  const auction = auctions.find((auction) => auction.id === Number(auctionId));
  if (!auction) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: "Auction not found",
        input: event,
      }),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "successfully retrieved auction",
      data: auction,
      input: event,
    }),
  };
}
