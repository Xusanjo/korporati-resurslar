import {Table, Model, Column, DataType} from "sequelize-typescript";

interface productCreateAttr{
    name: string;
    price: string;
    category: string;
    imageUrl: string;
}

@Table({ tableName: "product"})
export class Product extends Model<Product, productCreateAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    name: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    price: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    category: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    imageUrl: number;
}
