import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable()
export class VolumesValidator {

  static baseValidator(formControl: FormControl): ValidationErrors | null {
    const error = {base_path: {valid: false}};

    if (!formControl.value) {
      return null;
    }

    if (!formControl.value.startsWith('/')) {
      return error;
    }

    return null;
  }
}
