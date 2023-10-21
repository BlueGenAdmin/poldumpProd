const axios = require('axios');



exports.adminDashboard = async (req,res)=>{

    const response1 = await axios.get('http://localhost:3000/budgetReports/api/budjetReportFind');

    const data1 = response1.data
    res.render("dashboard",{data1})
}

exports.adminBudjetReportsForm = (req,res)=>{
    res.render('budget_reports_form')
}

exports.budjetReports = async (req,res)=>{
    const response1 = await axios.get('http://localhost:3000/budgetReports/api/budgetReportGroup');

    const budgetData = response1.data
    res.render('budget_reports',{budgetData})
}

exports.login = (req,res)=>{
    res.render('login')
}