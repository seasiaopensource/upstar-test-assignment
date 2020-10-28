const model = require("../models/index");
const helpers = require("../helpers");
const prod = model.products,
    category = model.categories;

module.exports = {


//////////////////////////////////////////////////////////////////////////////////
///////////////////////// get all products and their detail   /////////////////////
//////////////////////////////////////////////////////////////////////////////// 
    
list: async function(req, res) {
    try {
        const products = await prod.findAll({
            attributes: ['name', 'description','image','price','quantity'],
            include: [
                {
                attributes: ['id', 'name','image'],
                model: category
                },
            ]
        });
        if (products) {
            return helpers.jsonResponse(res,true,products,"All Product List", 200, 200);
        }

    } catch (e) {
        return helpers.jsonResponse(res, false, {}, e.message, e.code, 400);
    }
    },

//////////////////////////////////////////////////////////////////////////////////
/////////////// get products based on category and their detail   ///////////////
//////////////////////////////////////////////////////////////////////////////// 
    
getByCategoryId: async function(req, res) {
    try {
        const products = await prod.findAll({
            attributes: ['name', 'description', 'image', 'price', 'quantity'],
            where: {
                 categoryId:req.params.categoryId
            },
            include: [
                {
                attributes: ['id', 'name','image'],
                model: category
                }
            ]
        });
        if (products) {
            return helpers.jsonResponse(res,true,products,"Product List", 200, 200);
        }

    } catch (e) {
        return helpers.jsonResponse(res, false, {}, e.message, e.code, 400);
    }
    },
};
