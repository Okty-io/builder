import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable()
export class EnvironmentsValidator {

  static isBaseValid(formControl: FormControl): ValidationErrors | null {
    const error = {environment_base: {valid: false}};

    if (!formControl.value) {
      return null;
    }

    if (/\s/.test(formControl.value)) {
      return error;
    }

    if (/[^a-zA-Z0-9_]/.test(formControl.value)) {
      return error;
    }

    if (/^[0-9]/.test(formControl.value)) {
      return error;
    }

    return null;
  }

}
