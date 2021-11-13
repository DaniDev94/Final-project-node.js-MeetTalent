const EnterpriseRoutes = require("express").Router();

const {getEnterprises,postNewEnterprises, putEnterprise, pachEnterprise, deleteEnterprise, getEnterpriseById} = require('../controllers/enterprise.controller');

EnterpriseRoutes.get('/',getEnterprises)
EnterpriseRoutes.post('/',postNewEnterprises)
EnterpriseRoutes.put('/:id',putEnterprise)
EnterpriseRoutes.patch('/:id',pachEnterprise)
EnterpriseRoutes.delete('/:id',deleteEnterprise)
EnterpriseRoutes.get('/:id',getEnterpriseById)





module.exports = EnterpriseRoutes