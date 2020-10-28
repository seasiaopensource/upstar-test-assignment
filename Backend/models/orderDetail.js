const common = require('../helpers/common');
module.exports = (sequelize, type) => {
	const model = sequelize.define(
		"orderDetail",
		{
			id: {
				type: type.UUID,
				allowNull: false,
                primaryKey: true,
                defaultValue: type.UUIDV4
            },
            orderId: {
				type: type.UUID,
				allowNull: false,
                references: {
					model: 'orders',
					key: 'id'
				   },
				   onUpdate: 'CASCADE',
				   onDelete: 'CASCADE',
			},
			productId: {
				type: type.UUID,
				allowNull: false,
                references: {
					model: 'products',
					key: 'id'
				   },
				   onUpdate: 'CASCADE',
				   onDelete: 'CASCADE',
			},
			qauntity: {
				type: type.INTEGER(4),
				allowNull: false,
			},
			status: {
                type: type.INTEGER(4),
				allowNull: false,
				defaultValue: 1     ///// 1-Pending,2-Approved,3-On the way,4-Delivered,5-Cancelled
            },
            paymentType: {
				type: type.UUID,
				allowNull: false,
				defaultValue: 1    ///// 1-Credit Card,2-Debit Card,3-Net Banking,4-COD
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
			table: "orderDetail",
			timestamps: false
		}
    );
	model.associate = models => {
        model.belongsTo(models.orders);
        model.belongsTo(models.products);
	  };
	return model;
};
