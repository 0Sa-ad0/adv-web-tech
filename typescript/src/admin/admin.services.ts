import { Injectable } from '@nestjs/common';
import { AdminDTO } from './admin.dto';

@Injectable()
export class AdminServices {
    private admins: any[] = [];

    /*createAdmin(_body: any): object {
        
        return _body;
    }*/

    updateAdmin(id: string, body: any): object {
        const index = this.admins.findIndex(admin => admin.id === id);
        if (index !== -1) {
            this.admins[index] = { ...this.admins[index], ...body };
            return this.admins[index];
        }
        return null;
    }

    deleteAdmin(id: string): object {
        const index = this.admins.findIndex(admin => admin.id === id);
        if (index !== -1) {
            const deletedAdmin = this.admins.splice(index, 1)[0];
            return deletedAdmin;
        }
        return null;
    }

    getAdminData(qry: { name: string; usertype: string; post: any; file: any; date: any }): object {
        return {
            name: qry.name + "(" + qry.usertype + ')',
            post: qry.post,
            upload: qry.file,
            date: qry.date,
        };
    }

    getuserpost(qry: any): object {
        return {
            name: qry.name,
            id: qry.id,
            dept: qry.dept,
            address: qry.address,
        };
    }

    adminprofile(qry: any): object {
        const adminId = qry.adminId;
        const adminProfile = {
            id: adminId,
            name: qry.name,
            email: qry.email,
        };
        return adminProfile;
    }

    updateaddress(qry: any): object {
        const adminId = qry.adminId;
        const newAddress = qry.newAddress;
        return { message: `Address updated for admin ${adminId} to ${newAddress}` };
    }

    /*async createAdmin(body: AdminDTO): Promise<AdminDTO> {
        console.log(body.name);
        return body;
    }*/

    async createAdmin(body: AdminDTO): Promise<AdminDTO> {
        return new Promise<AdminDTO>((resolve) => {
            setTimeout(() => {
                console.log(body.name);

                //const createdAdmin = ;

                //resolve(createdAdmin);
            }, 1000); 
        });
    }
}


/*if (!_body.name || !isNaN(Number(_body.name))) {
            throw new Error("Invalid Name. Name should not contain any numbers.");
        }

        /*if (!_body.email || _body.email.length < 30 || _body.email.indexOf('@') === -1 || _body.email.indexOf('.') === -1) {
            throw new Error("Invalid Email. Email must be less than 30 characters, and must contain @ and .");
        }

        if (!_body.password || !(/[!@#$&]/.test(_body.password))) {
            throw new Error("Invalid Password. Password is required and must contain one of the special characters (@, #, $, &).");
        }

        if (!_body.date || !(/^\d{4}-\d{2}-\d{2}$/.test(_body.date))) {
            throw new Error("Invalid Date. Please provide a valid date in 'YYYY-MM-DD' format.");
        }

        if (!_body.socialMedia || !(/^https?:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9_]+$/.test(_body.socialMedia))) {
            throw new Error("Invalid Social Media Link. Please provide a valid social media link.");
        }

        if (_body.phoneNumber && (_body.phoneNumber.length >= 11 )) {
            throw new Error("Invalid Phone Number. Phone number must be a number and not longer than 11 digits.");
        }

        const newAdmin = {
            id: Math.random().toString(36).substring(2, 9),
        };*/

/*let adminId = 1;
const newAdmin = {
    id: adminId++
};*/


//this.admins.push(newAdmin);