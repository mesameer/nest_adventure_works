import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { addUser } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Get('/')

    getAll() {
        return this.userService.getAll();
    }

    @Post('/')

    add(@Body() userData: addUser) {
        return { data: userData};
    }
}
