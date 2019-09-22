const express = require('express');
const Models = require('../models/all_models');
const hash = (secret, key) => require('crypto').createHmac('sha1', secret).update(key).digest('hex');

exports.getUsers = (req, res) => {
    res.send('Controlles.users.getUsers');
}

exports.setUsers = (req, res) => {
    res.send('Controllers.users.setUsers');
}

exports.auth = (req, res) => {
    if (!req.body) return res.status(400);
        Models.users.findOne({login: req.body.ulogin, pass: hash(req.body.upass, 'secret')}, (er, usr) => {
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
    console.log(Object.keys(req));
    console.log(req.files);
    console.log(req.file);
    Models.users.findOne({_id: req.session.user._id}, (er, nusr) => {
        res.send([nusr, upUser]);
    });
}

exports.signon = (req, res) => {
    res.render('signon.pug');
}

exports.register = (req, res) => {
    if (!req.body) return res.send(400);
    const hashpass = hash(req.body.newUsr.pass, 'secret');
    const newUser = new Models.users({
        first_name: req.body.newUsr.first_name,
        last_name: req.body.newUsr.last_name,
        email: req.body.newUsr.email,
        login: req.body.newUsr.login,
        pass: hashpass,
        birth_date: req.body.newUsr.birth_date,
        avatar: "",
        friends: [],
        register_date: new Date(),
        role: 'participant'
    });
    newUser.save((err) => {
        if (err) return console.log(err);
        req.session.user = newUser;
        req.session.auth = true;
        res.send(true);
    });
    
}