const common = require('../helpers/common');
module.exports = (sequelize, type) => {
	const model = sequelize.define(
		"categories",
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
            status: {
                type: type.INTEGER(11),
				allowNull: false,
				defaultValue: 1       /// 1-active,0-inactive
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
			table: "categories",
			timestamps: false
		}
	);
	return model;
};
