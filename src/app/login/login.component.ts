import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginUser } from './login-user';
import { ParseService } from '../shared/services/parse.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    private email: string;
    private password: string;
    private loginFailed: boolean = false;
    model: LoginUser = new LoginUser('','');

    constructor(public router: Router, private parse: ParseService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

    onSubmit() {
      this.parse.login(this.model.email, this.model.password).then(user => {
        // Navigating from here causes dropdown menu in header not work (logout option).
        // But it works when navigated through htmls routerLink, like in upstream.
        this.router.navigate(['/dashboard']);
      }).catch((user, error) => {
        console.log('failed to login', user, error);
        this.loginFailed = true;
        // without detectChanges() alert is not shown immediately
        this.ref.detectChanges();
      });
    }

}
