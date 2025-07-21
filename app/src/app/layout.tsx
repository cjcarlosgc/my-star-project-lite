import type { Metadata } from 'next';
import ApolloMainWrapper from '@/lib/apollo/apollo-main-wrapper';

export const metadata: Metadata = {
  title: 'My star project',
  description: 'A simple project to demonstrate Next.js and Apollo Client',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1
            style={{ background: 'black', color: 'white', fontWeight: 'bold' }}
          >
            My Star Project
          </h1>
        </header>

        <ApolloMainWrapper>{children}</ApolloMainWrapper>
      </body>
    </html>
  );
}
