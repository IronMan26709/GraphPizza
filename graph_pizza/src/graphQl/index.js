import { GraphQLClient } from "graphql-request";


export let gql;

export const getToken = () =>{
    // console.log(localStorage.JwtToken)
    if( localStorage.JwtToken){
        return ( gql = new GraphQLClient( "/graphql",{
            headers: { Authorization : `Bearer ${localStorage.JwtToken}`}
        }));
    } else {
        return ( gql = new GraphQLClient( "/graphql", { headers : {} }));
    }
}