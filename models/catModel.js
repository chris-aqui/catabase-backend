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
    require: true
  },
  status: {
    type: String,
    default: "Not Tested",
    required: true
  },
  description: {
    type: String
  },
  serialNumber: {
    type: Number
  },
  shelterTableID: {
    type: Schema.Types.ObjectId, ref: 'shelter'
  },
  shelterID: {
    type: Number,
    required: true
  },
  petpointID: {
    type: Number,
    required: true
  },
  Image: {
    type: String,
    required: true
  },
  FIVTested: {
    type: String,
    enum: ["Positive", "Negative"],
    default: "Not Tested",
    required: true
  },
  FLVTested: {
    type: String,
    enum: ["Positive", "Negative"],
    default: "Not Tested",
    required: true
  },
  FVRCPVaccinationDate: {
    type: Date
  },
  RabiesVaccinationDate: {
    type: Date
  },
  vetTableID: {
    type: Schema.Types.ObjectId, ref: 'vet'
  },
  MedicalNotes: {
    type: String
  },
  BehaviourNotes: {
    type: String
  },
  Outcome: {
    type: String
  },
  IntakeDate: {
    type: Date
  },
  FosterPlacementDate: {
    type: Date
  },
  fosterTableID: {
    type: Schema.Types.ObjectId, ref: 'foster'
  },
  ownerTableID: {
    type: Schema.Types.ObjectId, ref: 'owner'
  }
});

module.exports = mongoose.model("cat", catSchema);
