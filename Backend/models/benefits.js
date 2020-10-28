const common = require('../helpers/common');
module.exports = (sequelize, type) => {
	const model = sequelize.define(
		"benefits",
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
			price: {
				type: type.INTEGER(4),
				allowNull: false
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
			table: "benefits",
			timestamps: false
		}
	);
	return model;
};
