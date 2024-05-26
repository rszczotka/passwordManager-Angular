// password-dialog.component.ts
import { Component, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { LoginData } from '../loginData';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';
import { FormsModule } from '@angular/forms';


declare module 'bootstrap';

@Component({
  selector: 'app-password-dialog',
  standalone: true,
  templateUrl: './password-dialog.component.html',
  imports: [CommonModule, FormsModule],
})
export class PasswordDialogComponent implements AfterViewInit {
  @Input() password!: LoginData | null;
  @Output() passworChange = new EventEmitter<void>();
  @ViewChild('passwordModal', { static: false }) passwordModal!: ElementRef;
  private modalInstance: any;
  isEditing = false;

  copyToClipboard(value: string) {
    navigator.clipboard.writeText(value);
  }

  ngAfterViewInit() {
    this.modalInstance = new bootstrap.Modal(this.passwordModal.nativeElement, {});
  }

  show() {
    this.modalInstance.show();
  }
  onSubmitDelete(password: LoginData) {
    fetch('http://localhost/PasswordManager/deletePassword.php', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: password?.id }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.passworChange.emit();
        this.modalInstance.hide();
        this.removeModalBackdrop();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  onEdit(password: LoginData) {
    this.isEditing = true;
  }

  onSave() {
    fetch('http://localhost/PasswordManager/updatePassword.php', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.password),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.passworChange.emit();
        this.modalInstance.hide();
        this.removeModalBackdrop();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    this.isEditing = false;
  }

  onCancel() {
    this.isEditing = false; 
  }
  removeModalBackdrop() {
    document.body.classList.remove('modal-open');
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(backdrop => backdrop.remove());
  }
}