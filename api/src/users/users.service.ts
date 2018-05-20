import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async findOne(params): Promise<User> {
        return await this.usersRepository.findOne(params);
    }

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find({email: '104D3D@mailintator.com'});
    }
}
