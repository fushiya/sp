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
    console.log(req.body.ulogin);
    res.send(req.body.ulogin);
}

// exports.checkAuth = (req, res, next) => {
//     if (req.session.auth) {
//         req.session.auth.status = true;
//     }
// }