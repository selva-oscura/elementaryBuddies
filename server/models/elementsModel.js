var mongoose = require('mongoose');
// define the schema, i.e. the structure of how the MongoDB collections should look.  Using schemas allows all of the 
// documents within the same collection to have the same key names!  Hooray organization!

// Validations and validation messages
var ElementSchema = new mongoose.Schema({
  group: 	{type: String},
  position: {type: Number},
  name: 	{type: String},
  number: 	{type: Number},
  small: 	{type: String},
  molar: 	{type: Number},
  electrons: {type: Array}
});
// Mongoose documentation (http://mongoosejs.com/docs/api.html#schematype_SchemaType-required) specifies that violating
// the unique constraint returns an E11000 error from MongoDB when saving, not a Mongoose validation error

// The line below takes all of our schema's information and constructs the actual Product model that will be used
// as an intermediary between the app and the MongoDB database. 
mongoose.model('Element', ElementSchema);