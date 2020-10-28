const common = require('../helpers/common');
module.exports = (sequelize, type) => {
	const UserDetail = sequelize.define(
		"userDetail",
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
				 onUpdate: 'CASCADE',
				 onDelete: 'CASCADE',
			},
			fName: {
				type: type.STRING(255),
				allowNull: false
			},
			lName: {
				type: type.STRING(255),
				allowNull: false
			},
			repeatOrder: {
				type: type.INTEGER(4),
				allowNull: false,
				defaultValue: 1               /// in months
			},
			status: {
				type: type.INTEGER(4),
				allowNull: false,
			    defaultValue: 1               /// 1-active,0-inactive
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
			table: "userDetail",
			timestamps: false
		}
	);
	return UserDetail;
};
