// loginData.ts
export class LoginData {
  id: number;
  site_name: string;
  login: string;
  password: string;

  constructor(id:number, site_name: string, login: string, password: string) {
    this.id = id;
    this.site_name = site_name;
    this.login = login;
    this.password = password;
  }
}