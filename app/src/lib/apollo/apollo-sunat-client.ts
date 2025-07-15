import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://sunat-api.com/graphql',
  cache: new InMemoryCache(),
});

export default client;