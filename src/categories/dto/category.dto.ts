import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateCategoryDto {
  @Field()
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must need to be one string' })
  @MaxLength(40, { message: 'tối đa 40 kí tự' })
  name: string;
}

@InputType()
export class GetCategoriesDto {
  @Field({ nullable: true })
  page?: number | null;

  @Field({ nullable: true })
  perPage?: number | null;
}
