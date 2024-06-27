import { Body, Controller, Get, Param, ParseIntPipe, Post, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/createuser.dto';
import { AuthGuard } from 'src/users/guard/auth/auth.guard';
import { UsersPipe } from 'src/users/pipe/users/users.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')

export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    @UseGuards(AuthGuard)
    getAll(@Req() req: Request, @Res() res: Response) {
        return {
            users: this.usersService.fetchAll(),
        };
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    getById(@Param('id', UsersPipe) id: number) {
        return {
            user: {
                name: 'User 1',
                email: 'rechia',
            },
        };
    }

    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() userData: CreateUserDto) { }


}
