
/* eslint-disable no-empty-pattern */
const Test = require('./models/test')

const resolvers = {
  Query: {
    // products
    getProducts: async () => {
      try {



        //const test = new Test([{name: 'test666'}, {name: 'bbbbbbb'}])


       //Test.insertMany([{name: 'test666'}, {name: 'bbbbbbb'}], function (err, mongooseDocuments) { /* Your callback function... */ });


     //const result = await test.save()

        const products = await Test.find({})
        return products
      } catch (err) {
        console.log(err)
      }
    }    
  },

  Mutation: {
    newTest: async (_: any, { input }: any) => {
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