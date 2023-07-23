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
    branches: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Branches',
    }],

}, { 
    timestamps: { createdAt: true }
});

module.exports = mongoose.models.People || mongoose.model('People', PeopleSchema);
