import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderProductDto } from './create-order-product.dto';

export class UpdateOrderProductDto extends PartialType(CreateOrderProductDto) {
    orderId?: string;
    productId?: string;
    quantity?: string;
}
