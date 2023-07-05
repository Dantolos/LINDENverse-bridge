import { Schema, model, connection } from 'mongoose';
import connectMongo from '../utils/connectdb';

const peopleSchema = new Schema({
    name: String,
    age:{ type: Number, default: 52 },
    email: {
        type: String,
        required: true,
        unique: true,
    },

}, { 
    timestamps: { createdAt: true }
});

let People;

try {
  // Check if the model already exists in the current connection
  People = connection.models.People || model('People', peopleSchema);
} catch (error) {
  // Create the model if it doesn't exist
  People = model('People', peopleSchema);
}

export default People;
