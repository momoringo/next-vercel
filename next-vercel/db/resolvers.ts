
/* eslint-disable no-empty-pattern */
const Test = require('./models/test')

const resolvers = {
  Query: {
    // products
    getProducts: async () => {
      try {
        const products = await Test.find({})
        console.log(products);
        return products
      } catch (err) {
        console.log(err)
      }
    }    
  },

  Mutation: {
    newTest: async (_, { input }) => {
      try {
        const test = new Test({name: 'test666'})

        const result = await test.save()

        return { result }
      } catch (err) {
        console.log(err)
      }
    },    
  }
}

export default resolvers