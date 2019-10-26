import { GraphQLClient } from "graphql-request";


export let gql;

export const GetToken = () =>{
    if( localStorage.jwtToken){
        return (gql = new GraphQLClient( "/graphql",{
            headers: {Autorisation: `Bearer${localStorage.jwtToken}`}
        }));
    } else {
        return ( gql = new GraphQLClient( "/graphql", {
            headers : {} }));
    }
}