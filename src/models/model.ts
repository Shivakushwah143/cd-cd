import mongoose, { Schema, Document } from 'mongoose';

export interface IData extends Document {
  title: string;
  description: string;
  value: number;
  createdAt: Date;
}

const DataSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IData>('Data', DataSchema);