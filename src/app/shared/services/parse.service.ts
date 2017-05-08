import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Parse } from 'parse';

@Injectable()
export class ParseService {
  private user;

  constructor() {
    console.info('Initializing Parse');
    Parse.initialize(environment.appId);
    Parse.serverURL = environment.serverUrl;
    console.info('Parse initialization finished.');
  }

  test() {
    console.log('current user:', Parse.User.current());
  }

  isLoggedIn(): boolean {
    if (Parse.User.current()) return true;
    else return false;
  }

  login(user: string, pass: string): Parse.Promise {
    return Parse.User.logIn(user, pass);
  }

  logout(): Parse.Promise {
    return Parse.User.logOut();
  }

}

