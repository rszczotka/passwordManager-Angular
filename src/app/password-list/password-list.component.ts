// password-list.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginData } from '../loginData';
import { PasswordDialogComponent } from '../password-dialog/password-dialog.component';

@Component({
  selector: 'app-password-list',
  standalone: true,
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.css'],
  imports: [CommonModule, PasswordDialogComponent]
})
export class PasswordListComponent implements OnInit {
  @ViewChild(PasswordDialogComponent) passwordDialog!: PasswordDialogComponent;

  passwords: LoginData[] = [];
  selectedPassword: LoginData | null = null;

  ngOnInit() {
    this.loadPasswords();
    this.openDialog({ id: 0, site_name: '', login: '', password: '' });
  }

  openDialog(password: LoginData) {
    this.selectedPassword = password;
    this.passwordDialog.show();
  }
  public loadPasswords() {
    this.passwords = []; 
    fetch('http://localhost/PasswordManager/getAllPasswords.php')
      .then(response => response.json())
      .then(data => this.passwords = data)
      .catch(error => console.error(error));
  }
}