   
import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const TestSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
})

TestSchema.index({ name: 'text' })

module.exports = mongoose.models.Zuke || mongoose.model('Zuke', TestSchema)