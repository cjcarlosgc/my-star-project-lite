import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://my-star-backend-lite.azurewebsites.net/graphql',
  cache: new InMemoryCache(),
});

export default client;