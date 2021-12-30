import { ApolloServer, makeExecutableSchema } from 'apollo-server-micro'
import typeDefs from '../../../db/schema'
import resolvers from '../../../db/resolvers'
import connectDb from '../../../db/config'

connectDb()

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export const config = {
  api: {
    bodyParser: false,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true    
  },
}

export default new ApolloServer({ schema }).createHandler({
  path: '/api/graphql',
})

