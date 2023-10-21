const express = require('express');
const Router = express.Router();


const unitController = require('../../controller/admin/unitsController')







/**
 *  @description Root Route
 *  @method GET /
 */


Router.post('/api/unitPost',unitController.unitsCreate)
Router.get('/api/unitFind',unitController.unitsFind)
Router.get('/api/unitFindId/:id',unitController.unitsFindId)
Router.get('/api/unitDelete/:id',unitController.unitDelete)
Router.put('/api/unitUpdate/:id',unitController.unitUpdate)


module.exports = Router;