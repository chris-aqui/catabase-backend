// model dependencies
const mongoose = require("mongoose");
const uuidv1 = require("uuid/v1");

// because you need a schema bro
const Schema = mongoose.Schema;

const VetSchema = new Schema({
  uuid: {
    type: String,
    default: uuidv1()
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    require: true
  },
  phoneNumber: {
    type: Number
  },
  email: {
    type: String
  },
});

module.export = Vet = mongoose.model("vet", VetSchema);
