import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Test {
    id: ID
    name: String
  }

  type Query {
    getProducts: [Test]
  }  
`
export default typeDefs