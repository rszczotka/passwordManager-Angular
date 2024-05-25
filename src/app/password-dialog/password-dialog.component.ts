// password-dialog.component.ts
import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { LoginData } from '../loginData';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';

declare module 'bootstrap';

@Component({
  selector: 'app-password-dialog',
  standalone: true,
  templateUrl: './password-dialog.component.html',
  imports: [CommonModule] 
})
export class PasswordDialogComponent implements AfterViewInit {
  @Input() password!: LoginData | null;
  @ViewChild('passwordModal', { static: false }) passwordModal!: ElementRef;
  private modalInstance: any;

  copyToClipboard(value: string) {
    navigator.clipboard.writeText(value);
  }

  ngAfterViewInit() {
    this.modalInstance = new bootstrap.Modal(this.passwordModal.nativeElement, {});
  }

  show() {
    this.modalInstance.show();
  }
}