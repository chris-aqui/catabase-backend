var fosterModel = require('../models/fosterModel.js');

/**
 * fosterController.js
 *
 * @description :: Server-side logic for managing fosters.
 */
module.exports = {

    /**
     * fosterController.list()
     */
    list: function (req, res) {
        fosterModel.find(function (err, fosters) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting foster.',
                    error: err
                });
            }
            return res.json(fosters);
        });
    },

    /**
     * fosterController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        fosterModel.findOne({ _id: id }, function (err, foster) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting foster.',
                    error: err
                });
            }
            if (!foster) {
                return res.status(404).json({
                    message: 'No such foster'
                });
            }
            return res.json(foster);
        });
    },

    /**
     * fosterController.create()
     */
    create: function (req, res) {
        var foster = new fosterModel({
            name: 'Elizabeth Porter',
            address: '123 Cat Lane',
            phoneNumber: '647-999-0000',
            email: 'ep@capitalone.com'
        },
            {
                name: 'Christine Aqui',
                address: '123 Catastophre Avenue',
                phoneNumber: '647-999-0000',
                email: 'ca@capitalone.com'
            },
            {
                name: 'Lisa Freedman',
                address: '123 BackAlley',
                phoneNumber: '647-999-0000',
                email: 'lf@capitalone.com'
                // name: req.body.name,
                // address: req.body.address,
                // phoneNumber: req.body.phoneNumber,
                // email: req.body.email,
            });

        foster.save(function (err, foster) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating foster',
                    error: err
                });
            }
            return res.status(201).json(foster);
        });
    },

    /**
     * fosterController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        fosterModel.findOne({ _id: id }, function (err, foster) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting foster',
                    error: err
                });
            }
            if (!foster) {
                return res.status(404).json({
                    message: 'No such foster'
                });
            }

            foster.name = req.body.name ? req.body.name : foster.name;

            foster.save(function (err, foster) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating foster.',
                        error: err
                    });
                }

                return res.json(foster);
            });
        });
    },

    /**
     * fosterController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        fosterModel.findByIdAndRemove(id, function (err, foster) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the foster.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
