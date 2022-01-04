import type { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer, makeExecutableSchema } from 'apollo-server-micro'
import typeDefs from '../../../db/schema'
import resolvers from '../../../db/resolvers'
import connectDb from '../../../db/config'

connectDb()

export const config = {
  api: {
    bodyParser: false,
  },
};
const apolloServer = new ApolloServer({ typeDefs, resolvers });
const startServer = apolloServer.start();
export default async function startFunction (req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}
