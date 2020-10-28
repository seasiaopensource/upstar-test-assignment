const common = require('../helpers/common');
module.exports = (sequelize, type) => {
	const model = sequelize.define(
		"orders",
		{
			id: {
				type: type.UUID,
				allowNull: false,
                primaryKey: true,
                defaultValue: type.UUIDV4
			},
			userId: {
				type: type.UUID,
				allowNull: false,
				references: {
				  model: 'users',
				  key: 'id'
				 },
				 onUpdate: 'CASCADE'
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
			table: "orders",
			timestamps: false
		}
	);
	return model;
};
