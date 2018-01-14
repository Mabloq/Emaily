const mongoose = require ('mongoose');
const {Schema} = mongoose;
const RecipientSchema = require ('./Recipient');
const ContactSchema = require ('./Contact');

const surveySchema = new Schema ({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  _user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  dateSent: Date,
});

mongoose.model ('surveys', surveySchema);
