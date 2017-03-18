import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

declare var localStorage: any;

export interface User {
    email: string,
    isAdmin: boolean,
    password: string,
    name: string
};

export interface LoginUser {
    isAdmin: boolean,
    name: string
};

@Injectable()
export class AuthenService {

    constructor() { }
    private mockData: User[] = require('../mock/users.json');

    login(username: string, password: string): Promise<LoginUser> {
        return new Promise((resolve, reject) => {
            for (let user of this.mockData) {
                if (user.email == username && user.password == password) {
                    let loginUser: LoginUser = { "isAdmin": user.isAdmin, "name": user.name } as LoginUser;
                    localStorage.setItem('user', JSON.stringify(loginUser));
                    resolve(loginUser);
                    return;
                }
            }
            console.log("reject login");
            reject("Authenication Error");
        });
    }

    public logout() {
        localStorage.removeItem('user');
    }
}