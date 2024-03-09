// LAB = 1

// ADMIN.SERVICES.TS

import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
    private admins = [];

    getAllAdmins(): any[] {
        return this.admins;
    }

    getAdminById(id: string): any {
        return this.admins.find(admin => admin.id === id);
    }

    createAdmin(newAdmin: any): any {
        // if (!newAdmin || !newAdmin.id || !newAdmin.name || !newAdmin.email || !newAdmin.password) {
        //     throw new HttpException('Invalid input. Name, email, and password are required.', HttpStatus.BAD_REQUEST);
        // }
        // this.admins.push(newAdmin);
        return newAdmin;
    }

    updateAdmin(id: string, updatedAdmin: any): any {
        //const index = this.admins.findIndex(admin => admin.id === id);
        // if (index !== -1) {
        //     this.admins[index] = { ...this.admins[index], ...updatedAdmin };
        //     return this.admins[index];
        //     return "success";
        // }
        return updatedAdmin;
    }

    partialUpdateAdmin(id: string, partialUpdatedAdmin: any): any {
        //const index = this.admins.findIndex(admin => admin.id === id);
        // if (index !== -1) {
        //     this.admins[index] = { ...this.admins[index], ...partialUpdatedAdmin };
        //     return this.admins[index];
        // }
        return partialUpdatedAdmin;
    }

    deleteAdmin(id: string): any {
        // const index = this.admins.findIndex(admin => admin.id === id);
        // if (index !== -1) {
        //     const deletedAdmin = this.admins.splice(index, 1);
        //     return deletedAdmin[0];
        // }
        return this.deleteAdmin;
    }

    searchAdmins(query: string): any[] {
        // Your logic to search admins based on the query parameter
        // This is a placeholder, you might want to implement a real search logic
        return this.admins.filter(admin => admin.name.includes(query));
    }

    promoteAdmin(id: string): any {
        // const index = this.admins.findIndex(admin => admin.id === id);
        // if (index !== -1) {
        //     Your logic to promote an admin
        //     return this.admins[index];
        // }
        return this.promoteAdmin;
    }

    suspendAdmin(id: string, suspensionDetails: any): any {
        // const index = this.admins.findIndex(admin => admin.id === id);
        // if (index !== -1) {
        //     Your logic to suspend an admin
        //     return this.admins[index];
        // }
        return suspensionDetails;
    }
}