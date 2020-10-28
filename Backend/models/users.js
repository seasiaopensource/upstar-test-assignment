const common = require('../helpers/common');
module.exports = (sequelize, type) => {
	const Users = sequelize.define(
		"users",
		{
			id: {
				type: type.UUID,
				allowNull: false,
                primaryKey: true,
                defaultValue: type.UUIDV4
			},
			email: {
				type: type.STRING(60)
			},
			password: {
				type: type.STRING(60)
			},
			role: {
			  type: type.INTEGER(4),
			  allowNull: false,
			  defaultValue: 2            /// 1- admin,2-user
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
			table: "users",
			timestamps: false
		}
	);
	Users.associate = models => {
		Users.hasOne(models.userDetail);
	  };
	return Users;
};
