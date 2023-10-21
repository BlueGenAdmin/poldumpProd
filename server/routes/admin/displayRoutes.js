const express    = require('express');
const Router = express.Router()



const  dashboardServices = require('../../services/admin/adminRender');



Router.get('/dashboard',dashboardServices.adminDashboard)
Router.get('/adminBudgetReportsForm',dashboardServices.adminBudjetReportsForm)
Router.get('/budgetReports',dashboardServices.budjetReports)
Router.get('/login',dashboardServices.login)


module.exports = Router;