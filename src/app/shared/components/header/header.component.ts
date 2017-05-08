import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import { ParseService } from '../../services/parse.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private translate: TranslateService, private parse: ParseService) { }

    ngOnInit() {}

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
      this.parse.logout().then(result => console.log('User has been logged out'));
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
