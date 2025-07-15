import MongoDBConnection from "../../../../../mongodbDatabase/mongodb";

export async function GET(req){

    const dbcollection = await MongoDBConnection('Resourse_Category_One');
    const data = await dbcollection.find({}). toArray();

    return Response.json(data);

}



export async function POST(req){
    const postedData = await req.json()
    const dbcollection = await MongoDBConnection('Resourse_Category_One');
    const result = await dbcollection.insertOne(postedData);
    
    return Response.json(result)
}