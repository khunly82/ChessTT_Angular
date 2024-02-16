import { Validators } from "@angular/forms";
import { DateValidators } from "src/app/core/validators/date.validators";

export const registerForm = {
    username: [null, [
        Validators.required,
        Validators.maxLength(100),
    ]],
    email: [null, [
        Validators.required,
        Validators.email,
    ]],
    elo: [null, [
        Validators.min(0),
        Validators.max(3000),
    ]],
    birthDate: [null, [
        Validators.required,
        DateValidators.notBefore(new Date()),
    ]],
    gender: [null, [
        Validators.required,
    ]],
}