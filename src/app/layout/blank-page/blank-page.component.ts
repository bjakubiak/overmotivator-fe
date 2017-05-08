import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ParseService } from '../../shared/services/parse.service';
@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    constructor(private parse: ParseService, public router: Router) { }
    ngOnInit() { }

    parseTest() {
      this.parse.test();
    }

    navigateTest() {
      this.router.navigate(['/dashboard']);
    }
}
