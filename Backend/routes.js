const router = require("express").Router();
const config = require('config');
const cookieParser = require('cookie-parser');

const boxCtrl = require("./controllers/boxController");
const prodCtrl = require("./controllers/productController");


// middleware to check authentication

const withAuthUserId = [
	cookieParser(),
	(req, res, next) => {
	  const claims = jsonwebtoken.verify(req.cookies['jwt'], config.jwtToken)
	  req['authUserId'] = claims['id']
	  next()
	}
  ]

// Define All Routes Below


// Api V1 Routes Start -------------------



// GET Routes
router.get("/v1/boxList", boxCtrl.list);
router.get("/v1/productList", prodCtrl.list);
router.get("/v1/productList/categoryId", prodCtrl.getById);


// Api V1 Routes Ends -------------------


module.exports = router;
