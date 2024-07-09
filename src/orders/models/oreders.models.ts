import { Column, DataType, Model, Table } from "sequelize-typescript";

interface OrderCreateAttr {
    customerId: string;
    productId: string;
    quantities: string;
    status: string;
}

@Table({tableName: 'order'})
export class Order extends Model<Order, OrderCreateAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    customerId: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    productId: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    quantities: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    status: number;

}