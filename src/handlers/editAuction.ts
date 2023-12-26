import { auctions } from "../constants/auctions";

export async function handler(event: any) {
  const auctionId = event.pathParameters.id;
  const body = JSON.parse(event.body);
  let auction = auctions.find((auction) => auction.id === Number(auctionId));
  if (!auction) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: "Auction not found",
      }),
    };
  }
  auction = { ...auction, ...body };

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "successfully edited auction",
      data: auction,
    }),
  };
}
