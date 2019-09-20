const express = require('express');
const Models = require('../models/all_models');

exports.getUsers = (req, res) => {
    res.send('Controlles.users.getUsers');
}

exports.setUsers = (req, res) => {
    res.send('Controllers.users.setUsers');
}

exports.auth = (req, res) => {
    if (!req.body) return res.status(400);
        Models.users.findOne({login: req.body.ulogin, pass: req.body.upass}, (er, usr) => {
            req.session.auth = true;
            req.session.user = usr;
            res.send(usr);
        });
}

exports.cabinet = (req, res) => {
    if (req.session.auth) {var ses = req.session.user} else {var ses = false;};
    Models.users.findOne({_id: ses._id}, (er, usr) => {
        res.render('cabinet.pug', {
            usr: usr,
            sdata: ses
        });
    });
}

exports.signout = (req, res) => {
    req.session.destroy((er) => {
        if (er) return console.log(er);
        res.redirect('/forum');
    });
}

exports.putUsers = (req, res) => {
    if (!req.body) return res.send(400);
    const upUser = req.body;
    // upUser.avatar = req.file;
    console.log(Object.keys(req));
    console.log(req.files);
    console.log(req.file);
    // for (let key in upUser) {
    //     if (upUser[key] == "") {
    //         upUser[key] = req.session.user[key];
    //     }
    // }
    Models.users.findOne({_id: req.session.user._id}, (er, nusr) => {
        res.send([nusr, upUser]);
    });
}