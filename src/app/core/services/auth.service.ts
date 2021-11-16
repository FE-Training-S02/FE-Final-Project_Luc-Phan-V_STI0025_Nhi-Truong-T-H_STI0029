import AuthHelper from '../helpers/authHelper';
import { ENDPOINT } from '@config/endpoint';
import { ApiService } from './api.service';
import { environment } from '@config/environment';

const apiBaseUrl = environment.apiBaseUrl;

export class AuthService extends AuthHelper {
  http = new ApiService();

  constructor() {
    super();
  }

  async signIn(body: any) {
    /* this is the default signIn,
      If you want to override it, please write the same function in specific type of auth.
    */
    return this.http.post([ENDPOINT.auth.login], body);
  }

  handleLogin = (dataInfo) => {
    const api = new ApiService();
    return api.post([`${apiBaseUrl}/users/login`], dataInfo);
  }
  signOut() {
    this.removeToken();
  }
}
