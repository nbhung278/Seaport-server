import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    CategoriesResolver,
    PrismaService,
    ConfigService,
    JwtService,
    PrismaService,
  ],
})
export class CategoriesModule {}
