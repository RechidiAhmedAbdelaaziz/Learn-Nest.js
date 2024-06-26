import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
    @Get('users')
    getAll(): string[] {
        return ['ahmed',];
    }

}
