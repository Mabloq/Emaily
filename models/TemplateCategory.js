const mongoose = require ('mongoose');
const {Schema} = mongoose;
const Template = require ('./Template');

const templateCategoriesSchema = new Schema ({
  name: String,
  _template: [{type: Schema.Types.ObjectId, ref: 'Template'}],
});

mongoose.model ('templateCategories', templateCategoriesSchema);
