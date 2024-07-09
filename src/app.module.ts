import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { OrderProductsModule } from './order-products/order-products.module';
import { CustomersModule } from './customers/customers.module';
import { ConfigModule } from "@nestjs/config"
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [UsersModule, ProductsModule, OrdersModule, OrderProductsModule, CustomersModule, ConfigModule({
    envFilePath: ".env",
    isGlobal: true,
  }),
  SequelizeModule.forRoot({
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [],
    autoLoadModels: true,
    sync: {},
    logging: true
  })
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
