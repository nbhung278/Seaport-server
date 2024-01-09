import { ObjectType, Field } from '@nestjs/graphql';
import { Category } from '../entities/category.entity';

@ObjectType()
export class categoryErrorType {
  @Field()
  message: string;

  @Field({ nullable: true })
  code: number;
}

@ObjectType()
export class categorySuccessTypes {
  @Field()
  message: string;

  @Field({ nullable: true })
  code: number;
}

@ObjectType()
export class categoryCreateResponse {
  @Field()
  message?: string;

  @Field(() => categoryErrorType, { nullable: true })
  error?: categoryErrorType;
}

@ObjectType()
export class getCategoriesResponse {
  @Field(() => [Category], { nullable: true })
  categories?: Category[];

  @Field(() => categoryErrorType, { nullable: true })
  error?: categoryErrorType;
}
