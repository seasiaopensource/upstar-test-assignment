const common = require('../helpers/common');
module.exports = (sequelize, type) => {
	const model = sequelize.define(
		"boxTypes",
		{
			id: {
				type: type.UUID,
				allowNull: false,
                primaryKey: true,
                defaultValue: type.UUIDV4
			},
			name: {
                type: type.STRING(60),
                allowNull: false
			},
			image: {
				type: type.STRING(80),
				allowNull: false
			},
			shipping: {
				type: type.INTEGER(4),
				allowNull: false
			},
            status: {
                type: type.INTEGER(11),
				allowNull: false,
				defaultValue: 1      //// 1-active,0-inactive
            },
			createdAt: {
				type: type.INTEGER(11),
				allowNull: false,
				defaultValue: common.timestamp()
			},
			updatedAt: {
				type: type.INTEGER(11),
				allowNull: false,
				defaultValue: common.timestamp()
			}
		},
		{
			table: "boxTypes",
			timestamps: false
		}
	);
	model.associate = models => {
		model.hasMany(models.boxBenefits,{foreignKey: 'boxId'});
	  };
	return model;
};
