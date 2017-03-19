import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'

import { LoginUser } from '../models/login-user.model';

declare var localStorage: any;

export interface User {
    email: string,
    isAdmin: boolean,
    password: string,
    name: string
};

@Injectable()
export class AuthenService {

    constructor() { }
    private mockData: User[] = require('../mock/users.json');

    public login(username: string, password: string): Promise<LoginUser> {
        return new Promise((resolve, reject) => {
            for (let user of this.mockData) {
                if (user.email == username && user.password == password) {
                    let loginUser: LoginUser = { "isAdmin": user.isAdmin, "name": user.name } as LoginUser;
                    localStorage.setItem('user', JSON.stringify(loginUser));
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

    public getLoginUser(): Observable<LoginUser> {
        return Observable.of(JSON.parse(localStorage.getItem("user")) as LoginUser);
    }

    public isAuthenticated(): boolean {
        return localStorage.getItem("user")
    }

}