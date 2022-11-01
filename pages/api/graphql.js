import "reflect-metadata";
import { gql, ApolloServer } from "apollo-server-micro";
import { buildSchema, Resolver, Query, Arg, ObjectType, Field, ID } from "type-graphql";


const server = new ApolloServer({});

const startServer = server.start();
export default async function handler(req, res){
    await startServer;
    await server.createHandler({ path: "/api/graphql" })(req, res);
} 

export const config = {
    api:{
        bodyParser: false,
    }
}

