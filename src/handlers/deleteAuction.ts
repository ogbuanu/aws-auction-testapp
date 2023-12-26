import { auctions } from "../constants/auctions";

export async function handler(event: any) {
  const auctionId = event.pathParameters.id;
  const auctionToDelete = auctions.find(
    (auction) => auction.id === Number(auctionId)
  );
  if (!auctionToDelete) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: "Auction not found",
      }),
    };
  }
  const remainingAuctions = auctions.filter(
    (auction) => auction.id !== Number(auctionId)
  );

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "successfully deleted auction",
      data: remainingAuctions,
    }),
  };
}
