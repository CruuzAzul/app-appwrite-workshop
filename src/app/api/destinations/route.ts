import { database } from "@/api/appwrite";
import { Server } from "@/api/server";
import { Destination } from "@/models/destination";
import { NextResponse } from "next/server";

export async function GET() {
  const { documents: destinations } = await database.listDocuments<Destination>(
    Server.databaseId,
    Server.destinationCollectionId
  );

  return NextResponse.json(destinations);
}
