import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { } from '@angular/common/http';


@Component({
    selector: 'app-password-creator',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './password-creator.component.html',
    styleUrl: './password-creator.component.css'
})
export class PasswordCreatorComponent implements OnInit {
    @Output() passwordCreated = new EventEmitter<void>();

    passwordstrength: string = "";
    logindata: string = "";
    witryna: string = "";
    generatedPassword: string = ""; 

    ngOnInit(): void {
        
    }

    onSubmit() {
        fetch('http://localhost/PasswordManager/password_generator.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ difficulty: this.passwordstrength , site_name: this.witryna, login: this.logindata}),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                this.passwordCreated.emit(); 
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}
