var vetModel = require('../models/vetModel.js');
const vetSeed = require('../database/vetSeed');

/**
 * vetController.js
 *
 * @description :: Server-side logic for managing vets.
 */
module.exports = {

    /**
     * vetController.list()
     */
    list: function (req, res) {
        vetModel.find(function (err, vets) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting vet.',
                    error: err
                });
            }
            return res.json(vets);
        });
    },

    /**
     * vetController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        vetModel.findOne({_id: id}, function (err, vet) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting vet.',
                    error: err
                });
            }
            if (!vet) {
                return res.status(404).json({
                    message: 'No such vet'
                });
            }
            return res.json(vet);
        });
    },

    /**
     * vetController.create()
     */
    create: function (req, res) {
        var vet = new vetModel({
            name: name.req.body,
            phoneNumber: phoneNumber.req.body,
            address: address.req.body
        });

        vet.save(function (err, vet) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating vet',
                    error: err
                });
            }
            console.log(vet)
            return res.status(201).json(vet);
        });
    },

    /**
     * vetController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        vetModel.findOne({_id: id}, function (err, vet) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting vet',
                    error: err
                });
            }
            if (!vet) {
                return res.status(404).json({
                    message: 'No such vet'
                });
            }

            vet.name = req.body.name ? req.body.name : vet.name;
			
            vet.save(function (err, vet) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating vet.',
                        error: err
                    });
                }

                return res.json(vet);
            });
        });
    },

    /**
     * vetController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        vetModel.findByIdAndRemove(id, function (err, vet) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the vet.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
