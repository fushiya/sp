const express = require('express');
const Models = require('../models/all_models');


exports.setTheme = (req, res) => {
    res.send('Controllers.themes.setTheme');
}

exports.getTheme = (req, res) => {
    if (req.session.auth) {var ses = req.session.user} else {var ses = false;};
    const category = req.params.category;
    Models.themes.find({categoryId: category}).populate([{path: 'categoryId'}, {path: 'create_userId'}]).exec((er, thm) => {
        if (er) console.log(er);
        res.render('themesList.pug', {
            thms: thm,
            sdata: ses
        });
    });
}