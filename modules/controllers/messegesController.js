const express = require('express');
const Models = require('../models/all_models');

exports.getMessege = (req, res) => {
    res.send('Controllers.messeges.getMessege');
}

exports.setMessege = (req, res) => {
    res.send('Controllers.messeges.setMessege');
}