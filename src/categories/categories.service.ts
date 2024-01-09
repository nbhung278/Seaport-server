import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto, GetCategoriesDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const { name } = createCategoryDto;
    const category = await this.prismaService.category.findUnique({
      where: { name },
    });

    if (category) {
      throw new BadRequestException('This category is exist!');
    } else {
      try {
        const res = await this.prismaService.category.create({
          data: {
            name,
          },
        });
        if (res) {
          return {
            message: 'Create category successfully!',
          };
        }
      } catch (error) {
        throw new BadRequestException('Create category failed!');
      }
    }
  }

  async getCategories(getCategoriesDto: GetCategoriesDto) {
    try {
      const { page, perPage } = getCategoriesDto;
      const res = await this.prismaService.category.findMany(
        page &&
          perPage && {
            skip: (page - 1) * perPage,
            take: perPage,
          },
      );
      if (res) {
        return {
          categories: res,
        };
      }
    } catch (error) {
      throw new BadRequestException('Get categories failed!');
    }
  }
}
