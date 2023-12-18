import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get('/')

    getAllUsers() {
        return ["Get All Users"];
    }
}
