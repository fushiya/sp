const express = require('express');
const Models = require('../models/all_models');

exports.getCategories = (req, res) => {
    res.render('categoriesList.pug');
}

exports.setCategories = (req, res) => {
    res.send('Controllers.categories.setCategories');
}

exports.category = (req, res) => {
    if (req.session.auth) {var ses = req.session.user} else {var ses = false;};
    Models.categories.find({}, (er, ctg) => {
        res.render('categoriesList.pug', {
            categ: ctg,
            sdata: ses
        });
    });
}