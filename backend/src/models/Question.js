import mongoose, {Schema} from 'mongoose';

const questionSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  answers: Array,
});

export default mongoose.model('Question', questionSchema);
