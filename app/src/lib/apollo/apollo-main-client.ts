import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_MY_SERVICE_URL,
  cache: new InMemoryCache(),
});

console.log('************************************');
console.log(process.env.NEXT_PUBLIC_MY_SERVICE_URL);
console.log(process.env.POKE_SERVICE_URL);
console.log('************************************');

export default client;