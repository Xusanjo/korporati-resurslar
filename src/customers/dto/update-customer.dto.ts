import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
}