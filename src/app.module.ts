import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/services/users/users.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserResolver } from './graphql/resolvers/user.resolver';
import { UserSettingResolver } from './graphql/resolvers/usersetting.resolver';

@Module({
    imports: [UsersModule, GraphQLModule.forRoot<ApolloDriverConfig>({
        driver : ApolloDriver,
        autoSchemaFile: 'src/schema.gql',

    })],
    providers: [UsersService , UserResolver , UserSettingResolver]
})

export class AppModule { }
