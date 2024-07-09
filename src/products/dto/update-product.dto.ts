import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    nmae?: string;
    price?: string;
    category?: string;
    imageUrl?: string;
}
