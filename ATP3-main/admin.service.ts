import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  addAdmin(myobj: object): object {
      return myobj;
  }
  getIndex(): string {
    return 'Hello Saad!';
  }
  getUserById(id: string): object {
    return {messege:"Your ID is " + id};
  }
  getUserByNameandId(name: string, ID: string): object {
    return {messege: "Your name is "+name+ "Your ID is "+ID};
  }
}