import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    @UseGuards(AuthGuard('jwt'))
    listAll(@Req() request) {
        return this.usersService.findAll();
    }
}
