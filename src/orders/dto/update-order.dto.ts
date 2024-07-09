import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    customerId?: string;
    productId?: string;
    quantities?: string;
    status?: string;
}
