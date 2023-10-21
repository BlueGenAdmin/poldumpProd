const express = require("express")
const Router = express.Router()

const budjetReportsController = require("../../controller/admin/budjetReportController");
const budjetReportRender = require("../../services/admin/adminRender");






/**
 *  @description Root Route
 *  @method GET /
 */

//budjetReportRequest

Router.post('/api/budjetReportPost',budjetReportsController.budjetReportsCreate)
Router.get('/api/budjetReportFind',budjetReportsController.budjetReportsFind)
Router.get('/api/budjetReportFind/:id',budjetReportsController.budjetReportsFindId)
Router.get('/api/budjetReportDelete/:id',budjetReportsController.budjetReportsDelete)
Router.put('/api/budjetReportUpdate/:id',budjetReportsController.budjetReportsUpdate)

Router.get('/api/budgetReportGroup',budjetReportsController.budjetReportsGroup)

//unit api



module.exports= Router;