const common = require('../helpers/common');
module.exports = (sequelize, type) => {
	const model = sequelize.define(
		"products",
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
            categoryId: {
				type: type.UUID,
				allowNull: false,
				references: {
				  model: 'categories',
				  key: 'id'
				 },
				 onUpdate: 'CASCADE',
				 onDelete: 'CASCADE',
			},
			description: {
				type: type.STRING(255),
                allowNull: false
			},
			price: {
				type: type.FLOAT,
                allowNull: false
			},
			image: {
				type: type.STRING(80),
                allowNull: false
			},
			quantity: {
				type: type.INTEGER(4),
				allowNull: false,
				defaultValue: 50
			},
            status: {
                type: type.INTEGER(11),
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
			table: "products",
			timestamps: false
		}
	);
	model.associate = models => {
		model.belongsTo(models.categories);
	  };
	return model;
};
