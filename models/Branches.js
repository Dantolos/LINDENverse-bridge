import mongoose from 'mongoose';
import connectMongo from '../utils/connectdb';

const BranchesSchema = new mongoose.Schema({
    branche:{
      type: String,
      required: true,
      unique: true
    }
}, { 
    timestamps: { createdAt: true }
});

module.exports = mongoose.models.Branches || mongoose.model('Branches', BranchesSchema);
