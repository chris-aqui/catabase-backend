var catModel = require('../models/catModel.js');

/**
 * catController.js
 *
 * @description :: Server-side logic for managing cats.
 */
module.exports = {

    /**
     * catController.list()
     */
    list: function (req, res) {
        catModel.find(function (err, cats) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting cat.',
                    error: err
                });
            }
            return res.json(cats);
        });
    },

    /**
     * catController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        catModel.findOne({_id: id}, function (err, cat) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting cat.',
                    error: err
                });
            }
            if (!cat) {
                return res.status(404).json({
                    message: 'No such cat'
                });
            }
            return res.json(cat);
        });
    },

    /**
     * catController.create()
     */
    create: function (req, res) {
        var cat = new catModel({
			name : req.body.name

        });

        cat.save(function (err, cat) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating cat',
                    error: err
                });
            }
            return res.status(201).json(cat);
        });
    },

    /**
     * catController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        catModel.findOne({_id: id}, function (err, cat) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting cat',
                    error: err
                });
            }
            if (!cat) {
                return res.status(404).json({
                    message: 'No such cat'
                });
            }

            cat.name = req.body.name ? req.body.name : cat.name;
			
            cat.save(function (err, cat) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating cat.',
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
    remove: function (req, res) {
        var id = req.params.id;
        catModel.findByIdAndRemove(id, function (err, cat) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the cat.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
