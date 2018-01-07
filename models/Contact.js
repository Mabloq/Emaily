const mongoose = require ('mongoose');
const {Schema} = mongoose;

const contactSchema = new Schema ({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  name: String,
  company: String,
  email: {type: String, required: true},
  _user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  created: Date,
});

mongoose.model ('contacts', contactSchema);
