var mongoose = require("mongoose");
const uuidv1 = require("uuid/v1");
var Schema = mongoose.Schema;

var catSchema = new Schema({
  uuid: {
    type: String,
    default: uuidv1()
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  sex: {
    type: String,
    enum: ["Male", "Female"],
    require: true
  },
  status: {
    type: String,
    default: "Fostered",
    required: true
  },
  description: {
    type: String
  },
  serialNumber: {
    type: Number
  },
  shelterTableID: {
    type: Schema.Types.ObjectId,
    ref: "shelter"
  },
  shelterID: {
    type: Number
  },
  petpointID: {
    type: Number,
    required: true
  },
  image: {
    type: String
  },
  FIVTested: {
    type: String,
    enum: ["Positive", "Negative", "Not Tested"],
    default: "Not Tested",
    required: true
  },
  FLVTested: {
    type: String,
    enum: ["Positive", "Negative", "Not Tested"],
    default: "Not Tested",
    required: true
  },
  FVRCPVaccinationDate: {
    type: Date
  },
  rabiesVaccinationDate: {
    type: Date
  },
  vetTableID: {
    type: Schema.Types.ObjectId,
    ref: "vet"
  },
  medicalNotes: {
    type: String
  },
  behaviourNotes: {
    type: String
  },
  outcome: {
    type: String
  },
  intakeDate: {
    type: Date
  },
  fosterPlacementDate: {
    type: Date
  },
  fosterTableID: {
    type: Schema.Types.ObjectId,
    ref: "foster"
  },
  ownerTableID: {
    type: Schema.Types.ObjectId,
    ref: "owner"
  }
});

module.exports = mongoose.model("cat", catSchema);
