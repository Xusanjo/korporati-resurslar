import { Column, DataType, Model, Table} from "sequelize-typescript";

interface Order_ProductCreateAttr{
    orderId: string;
    productId: string;
    quantity: string;
}

@Table({tableName: 'order-product'})
export class OrderProduct extends Model<OrderProduct, Order_ProductCreateAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })
    orderId: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })
    productId: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })
    quantity: number;
}