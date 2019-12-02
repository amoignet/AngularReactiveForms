import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const emailRegex = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    const valid = emailRegex.test(control.value);

    const errors = {
        password: {
            rules: 'doit être une adresse email valide'
        }
    };

    return !valid ? errors : null;
}
