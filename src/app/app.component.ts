import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PasswordCreatorComponent } from './password-creator/password-creator.component';
import { PasswordListComponent } from './password-list/password-list.component';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, PasswordCreatorComponent, PasswordListComponent, PasswordDialogComponent]
})
export class AppComponent {
  title = 'password-generator';
}