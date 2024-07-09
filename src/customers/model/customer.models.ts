import { Column, DataType, Table, Model} from "sequelize-typescript";

interface CustomerCreateAttr {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
}

@Table({tableName: 'column'})
export class Customer extends Model<Customer, CustomerCreateAttr> {
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
    firstName: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })
    lastName: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })
    email: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    phone: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    address: number;
}