const EnterpriseRoutes = require("express").Router();

const {getEnterprises} = require('../controllers/enterprise.controller');

EnterpriseRoutes.get('/',getEnterprises)


module.exports = EnterpriseRoutes