import mongoose from 'mongoose';
import connectMongo from '../utils/connectdb';

const PeopleSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    age:{ type: Number, default: 52 },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
          validator: function (value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          },
          message: 'Invalid email address',
        },
    },

}, { 
    timestamps: { createdAt: true }
});

/* let People;

try {
  // Check if the model already exists in the current connection
  People = mongoose.connection.models.People || mongoose.model('People', peopleSchema);
} catch (error) {
  // Create the model if it doesn't exist
  People = model('People', peopleSchema);
} */

module.exports = mongoose.models.People || mongoose.model('People', PeopleSchema);
