const express = require('express');
const Models = require('../models/all_models');

exports.index = (req, res) => {
    res.redirect('/forum');
}

exports.home = (req, res) => {
    res.render('home.pug');
}