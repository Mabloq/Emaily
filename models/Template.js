const mongoose = require ('mongoose');
const {Schema} = mongoose;
// const CategorySchema = require ('./TemplateCategory');

const templateSchema = new Schema ({
  name: {type: String, required: true},
  category: String,
  _user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  design: String,
  html: String,
  createdAt: Date,
  UpdatedAt: Date,
});

mongoose.model ('templates', templateSchema);
