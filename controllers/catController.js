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
      secondaryBreed: req.body.secondaryBreed,
      sterilized: req.nody.sterilized,
      primaryColor: req.body.primaryColor,
      secondaryColor: req.body.secondaryColor,
      colorPattern: req.body.colorPattern,
      recordOwner: req.body.recordOwner,
      intakeSubtype: req.body.IntakeSubtype,
      jurisdiction: req.body.jurisdiction,
      transferReason: req.body.transferReason,
      status: req.body.status,
      location: req.body.location,
      fosterTableID: req.body.fosterTableID,
      ownerTableID: req.body.ownerTableID
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
      cat.image = req.body.image ? req.body.image : cat.image;
      //
      cat.FIVTested = req.body.FIVTested ? req.body.FIVTested : cat.FIVTested;
      cat.FLVTested = req.body.FLVTested ? req.body.FLVTested : cat.FLVTested;
      cat.FVRCPVaccinationDate = req.body.FVRCPVaccinationDate
        ? req.body.FVRCPVaccinationDate
        : cat.FVRCPVaccinationDate;
      cat.rabiesVaccinationDate = req.body.rabiesVaccinationDate
        ? req.body.rabiesVaccinationDate
        : cat.rabiesVaccinationDate;
      cat.vetTableID = req.body.vetTableID
        ? req.body.vetTableID
        : cat.vetTableID;
      cat.medicalNotes = req.body.medicalNotes
        ? req.body.medicalNotes
        : cat.medicalNotes;
      cat.behaviourNotes = req.body.behaviourNotes
        ? req.body.behaviourNotes
        : cat.behaviourNotes;
      cat.outcome = req.body.outcome ? req.body.outcome : cat.outcome;
      cat.intakeDate = req.body.intakeDate
        ? req.body.intakeDate
        : cat.intakeDate;
      cat.fosterPlacementDate = req.body.fosterPlacementDate
        ? req.body.fosterPlacementDate
        : cat.fosterPlacementDate;
      cat.dob = req.body.dob ? req.body.dob : cat.dob;
      cat.size = req.body.size ? req.body.size : cat.size;
      cat.primaryBreed = req.body.primaryBreed
        ? req.body.primaryBreed
        : cat.primaryBreed;
      cat.secondaryBreed = req.body.secondaryBreed
        ? req.body.secondaryBreed
        : cat.secondaryBreed;
      cat.sterilized = req.body.sterilized
        ? req.body.sterilized
        : cat.sterilized;
      cat.primaryColor = req.body.primaryColor
        ? req.body.primaryColor
        : cat.primaryColor;
      cat.secondaryColor = req.body.secondaryColor
        ? req.body.secondaryColor
        : cat.secondaryColor;
      cat.colorPattern = req.body.colorPattern
        ? req.body.colorPattern
        : cat.colorPattern;
      cat.recordOwner = req.body.recordOwner
        ? req.body.recordOwner
        : cat.recordOwner;
      cat.intakeSubtype = req.body.intakeSubtype
        ? req.body.intakeSubtype
        : cat.intakeSubtype;
      cat.jurisdiction = req.body.jurisdiction
        ? req.body.jurisdiction
        : cat.jurisdiction;
      cat.transferReason = req.body.transferReason
        ? req.body.transferReason
        : cat.transferReason;
      cat.location = req.body.location ? req.body.location : cat.location;

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
