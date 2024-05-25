// loginData.ts
export class LoginData {
  site_name: string;
  login: string;
  password: string;

  constructor(site_name: string, login: string, password: string) {
    this.site_name = site_name;
    this.login = login;
    this.password = password;
  }
}