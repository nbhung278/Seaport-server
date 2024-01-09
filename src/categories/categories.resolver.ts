import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import {
  categoryCreateResponse,
  getCategoriesResponse,
} from './types/category.types';
import { CreateCategoryDto, GetCategoriesDto } from './dto';
import { BadRequestException, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/users/guards/auth.guard';

@Resolver()
export class CategoriesResolver {
  constructor(private readonly categoryService: CategoriesService) {}

  @Mutation(() => categoryCreateResponse)
  @UseGuards(AuthGuard)
  async createCategory(
    @Args('createCategoryDto') createCategoryDto: CreateCategoryDto,
  ): Promise<categoryCreateResponse> {
    if (!createCategoryDto.name) {
      throw new BadRequestException('Please fill the all fields');
    }
    return await this.categoryService.create(createCategoryDto);
  }

  @Query(() => getCategoriesResponse)
  @UseGuards(AuthGuard)
  async getCategories(
    @Args('getCategoriesDto') getCategoriesDto: GetCategoriesDto,
  ): Promise<getCategoriesResponse> {
    return await this.categoryService.getCategories(getCategoriesDto);
  }
}
