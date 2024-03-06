//LAB TASK = 3

//ADMIN.SERVICES.TS

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { AdminEntity } from './admin.entity';
import { FindOneOptions } from 'typeorm';


@Injectable()
export class AdminServices {

    private admins: any[] = [];
    adminService: any;
    constructor(@InjectRepository(AdminEntity) private adminRepository: Repository<AdminEntity>) { }

    async createUser(user: AdminEntity): Promise<AdminEntity> {
        return this.adminRepository.save(user);
    }

    async modifyPhoneNumber(userId: any, newPhone: number): Promise<AdminEntity> {
        const user = await this.adminRepository.findOne({
            where: { id: userId },
        } as FindOneOptions<AdminEntity>);
        if (!user) {
            throw new Error(`User with ID ${userId} not found.`);
        }
        user.phone = newPhone;
        return await this.adminRepository.save(user);
    }

    async getUsersWithNullFullName(fullName: string): Promise<AdminEntity[]> {
        return this.adminRepository.find({ where: { fullName: IsNull() } });
    }

    async removeUserById(userId: number): Promise<void> {
        await this.adminRepository.delete(userId);
    }
}


