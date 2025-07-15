import MongoDBConnection from "../../../../../mongodbDatabase/mongodb";



export async function GET(req){
    const dbcollection = await MongoDBConnection('Mission_Data');
    const data = await dbcollection.find({}).otArray();
    return Response.json(data);
}


export async function POST(req){
    const postedData = await req.json();
    const dbcollection = await MongoDBConnection('Mission_Data');
    const data = await dbcollection.insertone(postedData);
    return Response.json(data);
}