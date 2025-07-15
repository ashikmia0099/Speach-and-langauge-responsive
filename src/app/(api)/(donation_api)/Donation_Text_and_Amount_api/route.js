
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server"; // use NextResponse in App Router
import MongoDBConnection from "../../../../../mongodbDatabase/mongodb";

export async function GET(req) {
  try {
    const dbcollection = await MongoDBConnection('Donation_Text_And_Amount_Data');
    const data = await dbcollection.find({}).toArray();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}




export async function POST(req) {
  try {
    const postedData = await req.json();
    const dbcollection = await MongoDBConnection('Donation_Text_And_Amount_Data');
    const result = await dbcollection.insertOne(postedData);
    return NextResponse.json({ insertedId: result.insertedId });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}







export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const dbcollection = await MongoDBConnection("Donation_Text_And_Amount_Data");

    const query = { _id: new ObjectId(id) };

    const result = await dbcollection.deleteOne(query);

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: "No document found to delete" }, { status: 404 });
    }

    return NextResponse.json({ message: "Deleted successfully", deletedCount: result.deletedCount });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}




export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const updatedData = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }

    const dbcollection = await MongoDBConnection("Donation_Text_And_Amount_Data");

    const result = await dbcollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "No document found with that ID" }, { status: 404 });
    }

    return NextResponse.json({ message: "Updated successfully", matchedCount: result.matchedCount });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
