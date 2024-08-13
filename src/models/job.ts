import { Schema, model } from 'mongoose';

const jobSchema = new Schema({
  title: Schema.Types.String,
  company: Schema.Types.String,
  location: Schema.Types.String,
  link: Schema.Types.String,
});

export const Job = model('Job', jobSchema);