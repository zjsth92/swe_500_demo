import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of'

import { LoginUser } from '../models/login-user.model';

declare var localStorage: any;

export interface User {
    email: string,
    isAdmin: boolean,
    password: string,
    name: string,
    profileUrl: string
};

@Injectable()
export class AuthenService {

    constructor() { 

    }
    private mockData: User[] = require('../mock/users.json');

    public login(username: string, password: string): Promise<LoginUser> {
        return new Promise((resolve, reject) => {
            for (let user of this.mockData) {
                if (user.email == username && user.password == password) {
                    let loginUser: LoginUser = { 
                        "isAdmin": user.isAdmin, 
                        "name": user.name, 
                        "email": user.email, 
                        "profileUrl": user.profileUrl 
                    } as LoginUser;
                    localStorage.setItem('user', JSON.stringify(loginUser));
                    console.log("login");
                    resolve(loginUser);
                    return;
                }
            }
            reject("Authenication Failed");
        });
    }

    public logout() {
        localStorage.removeItem('user');
    }

    public getLoginUser(): LoginUser {
        return JSON.parse(localStorage.getItem("user")) as LoginUser;
    }

    public isAuthenticated(): boolean {
        return localStorage.getItem("user") != null
    }

    public isAdmin(): boolean {
         let user = JSON.parse(localStorage.getItem("user")) as LoginUser
         return user.isAdmin
    }

}