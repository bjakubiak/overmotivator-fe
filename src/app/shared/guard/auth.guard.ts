import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { ParseService } from '../services/parse.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private parse: ParseService) { }

    canActivate() {
        if (this.parse.isLoggedIn()) {
          return true;
        }

        console.log('User not logged in, redirecting to /login');
        this.router.navigate(['/login']);
        return false;
    }
}
