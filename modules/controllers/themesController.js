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

exports.create = (req, res) => {
    if (req.session.auth) {var ses = req.session.user} else {var ses = false;};
    Models.categories.findOne({_id: req.params.category}, (er, ctgs) => {
        res.render('createTheme.pug', {
            ctg: ctgs,
            sdata: ses
        });
    });
}

exports.addTheme = (req, res) => {
    if (req.session.auth) {var ses = req.session.user} else {var ses = false;};
    let newTheme = new Models.themes({
        name: req.body.title_theme,
        content: req.body.content_theme,
        categoryId: req.body.categoryId_theme,
        create_userId: req.session.user._id,
        create_date: new Date()
    });
    newTheme.save();
    res.send(`/forum/c/${req.body.categoryId_theme}`);
}