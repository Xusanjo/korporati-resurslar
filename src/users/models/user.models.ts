import {
    Column,
    DataType,
    Model,
    Table
} from "sequelize-typescript";

interface UserCreationAttr {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

@Table({tableName: "user"})
export class User extends Model<User, UserCreationAttr>{
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
    firstName: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    lastName: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    email: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    password: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    role: number;
}