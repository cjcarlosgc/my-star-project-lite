'use client';

import { ApolloProvider } from '@apollo/client';
import client from './apollo-main-client';

export default function ApolloSunatWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}