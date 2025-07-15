import { ObjectId } from "mongodb";
import MongoDBConnection from "../../../../../mongodbDatabase/mongodb";
import { NextResponse } from "next/server";

export async function GET(req) {

    const dbcollection = await MongoDBConnection('News_Data');
    const data = await dbcollection.find({}).toArray();

    return Response.json(data);

}



export async function POST(req) {
    const postedData = await req.json()
    const dbcollection = await MongoDBConnection('News_Data');
    const result = await dbcollection.insertOne(postedData);

    return Response.json(result)
}




export async function PUT(req) {
    try {

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        const updatedData = await req.json();


        if (!id) {
            return NextResponse.json({ error: "Missing ID" }, { status: 400 });
        }

        const dbcollection = await MongoDBConnection('News_Data')


        const result = await dbcollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updatedData }
        )


        if (result.matchedCount === 0) {
            return NextResponse.json({ error: 'No document found with that id' }, { status: 404 },)
        }

        return NextResponse.json({ message: "Updatted Successfully", matchedCount: result.matchedCount, success: true })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}




export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        const dbcollection = await MongoDBConnection('News_Data');

        const query = { _id: new ObjectId(id) };

        const result = dbcollection.deleteOne(query);

        if (result.deletedCount === 0) {
            return NextResponse.json({ message: "No document found to delete" }, { status: 404 });
        }
        return NextResponse.json({ message: "Deleted successfully", deletedCount: result.deletedCount });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}