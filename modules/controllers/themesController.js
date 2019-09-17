const express = require('express');
const Models = require('../models/all_models');


exports.setTheme = (req, res) => {
    res.send('Controllers.themes.setTheme');
}

exports.getTheme = (req, res) => {
    const category = req.params.category;
    Models.themes.find({categoryId: category}).populate('categoryId').exec((er, thm) => {
        if (er) console.log(er);
        res.render('themesList.pug', {
            thms: thm
        });
    });
}