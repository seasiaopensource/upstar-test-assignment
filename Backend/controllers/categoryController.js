const model = require("../models/index");
const helpers = require("../helpers");
const category = model.categories;


module.exports = {

    //////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////// get category list with detail /////////////////////
    //////////////////////////////////////////////////////////////////////////////// 

    list: async function (req, res) {
        try {


            const catg = await category.findAll({
                attributes: ['name', 'image'],
                where: {
                    status: 1                     /// only active
                }
            });
            if (catg) {
                return helpers.jsonResponse(res, true, catg, "Category List", 200, 200);
            }
        } catch (e) {
            return helpers.jsonResponse(res, false, {}, e.message, e.code, 400);
        }
    }
};
