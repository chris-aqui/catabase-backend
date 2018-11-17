var catModel = require("../models/catModel.js");

/**
 * catController.js
 *
 * @description :: Server-side logic for managing cats.
 */
module.exports = {
  /**
   * catController.list()
   */
  list: function(req, res) {
    catModel.find(function(err, cats) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting cat.",
          error: err
        });
      }
      return res.json(cats);
    });
  },

  /**
   * catController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    catModel.findOne({ _id: id }, function(err, cat) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting cat.",
          error: err
        });
      }
      if (!cat) {
        return res.status(404).json({
          message: "No such cat"
        });
      }
      return res.json(cat);
    });
  },

  /**
   * catController.create()
   */
  create: function(req, res) {
    var cat = new catModel({
      name: req.body.name,
      age: req.body.age,
      sex: req.body.sex,
      description: req.body.description,
      serialNumber: req.body.serialNumber,
      shelterTableID: req.body.shelterTableID,
      shelterID: req.body.shelterID,
      petpointID: req.body.petpointID,
      image: req.body.image,
      FIVTested: req.body.FIVTested,
      FLVTested: req.body.FLVTested,
      FVRCPVaccinationDate: req.body.FVRCPVaccinationDate,
      rabiesVaccinationDate: req.body.rabiesVaccinationDate,
      vetTableID: req.body.vetTableID,
      medicalNotes: req.body.medicalNotes,
      behaviourNotes: req.body.behaviourNotes,
      outcome: req.body.outcome,
      intakeDate: req.body.intakeDate,
      fosterPlacementDate: req.body.fosterPlacementDate,
      dob: req.body.dob,
      size: req.body.size,
      primaryBreed: req.body.primaryBreed,
      secondaryBreed: req.body.secondaryBreed
    });

    cat.save(function(err, cat) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating cat",
          error: err
        });
      }
      return res.status(201).json(cat);
    });
  },

  /**
   * catController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    catModel.findOne({ _id: id }, function(err, cat) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting cat",
          error: err
        });
      }
      if (!cat) {
        return res.status(404).json({
          message: "No such cat"
        });
      }

      cat.name = req.body.name ? req.body.name : cat.name;
      cat.age = req.body.age ? req.body.age : cat.age;
      cat.sex = req.body.sex ? req.body.sex : cat.sex;
      cat.status = req.body.status ? req.body.status : cat.status;
      cat.description = req.body.description
        ? req.body.description
        : cat.description;
      cat.serialNumber = req.body.serialNumber
        ? req.body.serialNumber
        : cat.serialNumber;
      cat.shelterTableID = req.body.shelterTableID
        ? req.body.shelterTableID
        : cat.shelterTableID;
      cat.shelterID = req.body.shelterID ? req.body.shelterID : cat.shelterID;
      cat.petpointID = req.body.petpointID
        ? req.body.petpointID
        : cat.petpointID;
      cat.Image = req.body.Image ? req.body.Image : cat.Image;
      //
      cat.FIVTested = req.body.FIVTested ? req.body.FIVTested : cat.FIVTested;
      cat.FLVTested = req.body.FLVTested ? req.body.FLVTested : cat.FLVTested;
      cat.FVRCPVaccinationDate = req.body.FVRCPVaccinationDate
        ? req.body.FVRCPVaccinationDate
        : cat.FVRCPVaccinationDate;
      cat.RabiesVaccinationDate = req.body.RabiesVaccinationDate
        ? req.body.RabiesVaccinationDate
        : cat.RabiesVaccinationDate;
      cat.vetTableID = req.body.vetTableID
        ? req.body.vetTableID
        : cat.vetTableID;
      cat.MedicalNotes = req.body.MedicalNotes
        ? req.body.MedicalNotes
        : cat.MedicalNotes;
      cat.BehaviourNotes = req.body.BehaviourNotes
        ? req.body.BehaviourNotes
        : cat.BehaviourNotes;
      cat.Outcome = req.body.Outcome ? req.body.Outcome : cat.Outcome;
      cat.IntakeDate = req.body.IntakeDate
        ? req.body.IntakeDate
        : cat.IntakeDate;
      cat.FosterPlacementDate = req.body.FosterPlacementDate
        ? req.body.FosterPlacementDate
        : cat.FosterPlacementDate;

      cat.save(function(err, cat) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating cat.",
            error: err
          });
        }

        return res.json(cat);
      });
    });
  },

  /**
   * catController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    catModel.findByIdAndRemove(id, function(err, cat) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the cat.",
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
