import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
const jwtSignKey = require("../../authconfig.json").jwtSignKey;


@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) { }

    async createToken() {
        const user: JwtPayload = { email: '104D3D@mailintator.com' };
        return jwt.sign(user, jwtSignKey, { expiresIn: 3600 });
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return await this.usersService.findOne({email: payload.email});
    }
}
