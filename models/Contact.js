const mongoose = require ('mongoose');
const {Schema} = mongoose;

const surveySchema = new Schema ({
  name: String,
  email: String,
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model ('surveys', surveySchema);
