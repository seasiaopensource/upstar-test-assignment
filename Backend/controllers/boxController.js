const model = require("../models/index");
const helpers = require("../helpers");
const boxTypes = model.boxTypes;
const benefit = model.benefits;
const boxBenefit = model.boxBenefits;

module.exports = {

    //////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////// get box list with shipping ////////////////////////
    //////////////////////////////////////////////////////////////////////////////// 

    list: async function (req, res) {
        try {


            const type = await boxTypes.findAll({
                attributes: ['id', 'name', 'image', 'shipping'],
                where: {
                    status: 1                     /// only active
                },
                include: [
                    {
                        attributes: ['benefitId'],
                        model: boxBenefit,
                        include: [{
                            attributes: ['name', 'price', 'id'],
                            model: benefit,
                        }]
                    },

                ]

            });
            if (type) {
                return helpers.jsonResponse(res, true, type, "Box List", 200, 200);
            }
        } catch (e) {
            return helpers.jsonResponse(res, false, {}, e.message, e.code, 400);
        }
    },


    ///////////////////////////////////////////////////////////////////////////////
    ///////////////////////////// box benefits with boxId ////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    boxBenefit: async function (req, res) {
        try {
            const type = await benefit.findAll({
                attributes: ['name', 'price', 'id'],
                include: [{
                    attributes: ['boxId'],
                    model: boxBenefit,
                }]
            });
            if (type) {
                return helpers.jsonResponse(res, true, type, "Box Benefits", 200, 200);
            }

        } catch (e) {
            return helpers.jsonResponse(res, false, {}, e.message, e.code, 400);
        }
    },


};
