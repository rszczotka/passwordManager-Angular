import { Component, OnInit } from '@angular/core';
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
    passwordstrength: string = "";
    logindata: string = "";
    witryna: string = "";
    generatedPassword: string = ""; // Dodane pole do przechowywania wygenerowanego hasła

    ngOnInit(): void {
        // Opcjonalny kod inicjalizujący komponent
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
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}
