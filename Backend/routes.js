const router = require("express").Router();
const boxCtrl = require("./controllers/boxController");
const prodCtrl = require("./controllers/productController");
const catCtrl = require("./controllers/categoryController");


// Define All Routes Below


// Api V1 Routes Start -------------------



// GET Routes
router.get("/v1/boxList", boxCtrl.list);
router.get("/v1/boxBenefits", boxCtrl.boxBenefit);
router.get("/v1/categoryList", catCtrl.list);
router.get("/v1/productList", prodCtrl.list);
router.get("/v1/productList/:categoryId", prodCtrl.getByCategoryId);


// Api V1 Routes Ends -------------------


module.exports = router;
