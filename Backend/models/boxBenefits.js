const common = require('../helpers/common');
module.exports = (sequelize, type) => {
	const model = sequelize.define(
		"boxBenefits",
		{
			id: {
				type: type.UUID,
				allowNull: false,
                primaryKey: true,
                defaultValue: type.UUIDV4
			},
			boxId: {
                type: type.UUID,
                allowNull: false,
                references: {
					model: 'boxTypes',
					key: 'id'
				   },
				   onUpdate: 'CASCADE',
				   onDelete: 'CASCADE'
			},
			benefitId: {
				type: type.UUID,
                allowNull: false,
                references: {
					model: 'benefits',
					key: 'id'
				   },
				   onUpdate: 'CASCADE',
				   onDelete: 'CASCADE'
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
			table: "boxBenefits",
			timestamps: false
		}
    );
    model.associate = models => {
		model.belongsTo(models.benefits);
	  };
	return model;
};
