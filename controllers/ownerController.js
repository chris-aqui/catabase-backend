var ownerModel = require('../models/ownerModel.js');

/**
 * ownerController.js
 *
 * @description :: Server-side logic for managing owners.
 */
module.exports = {

    /**
     * ownerController.list()
     */
    list: function (req, res) {
        ownerModel.find(function (err, owners) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting owner.',
                    error: err
                });
            }
            return res.json(owners);
        });
    },

    /**
     * ownerController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        ownerModel.findOne({_id: id}, function (err, owner) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting owner.',
                    error: err
                });
            }
            if (!owner) {
                return res.status(404).json({
                    message: 'No such owner'
                });
            }
            return res.json(owner);
        });
    },

    /**
     * ownerController.create()
     */
    create: function (req, res) {
        var owner = new ownerModel({
			name : req.body.name

        });

        owner.save(function (err, owner) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating owner',
                    error: err
                });
            }
            return res.status(201).json(owner);
        });
    },

    /**
     * ownerController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        ownerModel.findOne({_id: id}, function (err, owner) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting owner',
                    error: err
                });
            }
            if (!owner) {
                return res.status(404).json({
                    message: 'No such owner'
                });
            }

            owner.name = req.body.name ? req.body.name : owner.name;
			
            owner.save(function (err, owner) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating owner.',
                        error: err
                    });
                }

                return res.json(owner);
            });
        });
    },

    /**
     * ownerController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        ownerModel.findByIdAndRemove(id, function (err, owner) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the owner.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
