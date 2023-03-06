import mongoose from 'mongoose';

const TechniqueSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    unique: true,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

export const TechniqueModel = mongoose.model('Technique', TechniqueSchema);
