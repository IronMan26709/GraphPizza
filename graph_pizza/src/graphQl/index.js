import { GraphQLClient } from "graphql-request";


export let gql;

export const getToken = () =>{
    console.log(localStorage.JwtToken)
    if( localStorage.JwtToken){
        return ( gql = new GraphQLClient( "/graphql",{
            headers: { Autorization : `Bearer ${localStorage.JwtToken}`}
        }));
    } else {
        return ( gql = new GraphQLClient( "/graphql", { headers : {} }));
    }
}