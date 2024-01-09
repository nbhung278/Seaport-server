import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserResolver } from './user.resolver';
import { EmailModule } from './email/email.module';
import { EmailService } from './email/email.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    EmailModule,
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    UserResolver,
    ConfigService,
    JwtService,
    PrismaService,
    EmailService,
  ],
})
export class UsersModule {}
