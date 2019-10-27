import { GraphQLClient } from "graphql-request";


export let gql;

export const getToken = () =>{
    
    if( localStorage.JwtToken){
        return (gql = new GraphQLClient( "/graphql",{
            headers: {Autorisation: `Bearer${localStorage.JwtToken}`}
        }));
    } else {
        return ( gql = new GraphQLClient( "/graphql", {
            headers : {} }));
    }
}