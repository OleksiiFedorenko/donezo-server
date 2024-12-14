import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  async register(registerDto: any) {
    throw new Error('Method not implemented.');
  }

  async login(loginDto: any) {
    throw new Error('Method not implemented.');
  }

  async logout() {
    throw new Error('Method not implemented.');
  }

  async validateUser() {
    throw new Error('Method not implemented.');
  }
}
