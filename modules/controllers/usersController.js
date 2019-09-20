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

// exports.checkAuth = (req, res, next) => {
//     if (req.session.auth) {
//         req.session.auth.status = true;
//     }
// }