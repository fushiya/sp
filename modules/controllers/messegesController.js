const express = require('express');
const Models = require('../models/all_models');

exports.setMessege = (req, res) => {
    res.send('Controllers.messeges.setMessege');
}

exports.getMessege = (req, res) => {
    if (req.session.auth) {var ses = req.session.user} else {var ses = false;};
    const theme = req.params.theme;
    Models.messenges.find({themeId: theme}).populate([{path: 'themeId', populate: ['categoryId', 'create_userId']}, {path: 'create_userId'}]).exec((er, msg) => {
        if (er) return console.log(er);
        Models.themes.findOne({_id: theme}).populate(['categoryId', 'create_userId']).exec((err, thms) => {
            if (err) return console.log(err);
            res.render('messengesList.pug', {
                thm: thms,
                msgs: msg,
                sdata: ses
            });
        }); 
    });
}