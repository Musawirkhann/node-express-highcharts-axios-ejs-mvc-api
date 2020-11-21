'use strict';
const express = require('express');
const {dashboard, pieChart, dailyData} = require('../controllers/dashboardController');
const router = express.Router();

router.get('/', dashboard);
router.get('/piechartData', pieChart);
router.get('/dailyData', dailyData);

module.exports = {
    routes: router
}