import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Test {
    id: ID
    name: String
  }

  type Query {
    getProducts: [Test]
    test(id: Int!): Test
  }

  input TestInput {
    id: ID
  }

  type Mutation {
    newTest(input: TestInput): Test!
  }  
`
export default typeDefs