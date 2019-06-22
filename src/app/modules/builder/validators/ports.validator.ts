import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable()
export class PortsValidator {

  static isPortValid(formControl: FormControl): ValidationErrors | null {
    const error = {port: {valid: false}};

    if (!formControl.value) {
      return null;
    }

    if (!/^[0-9]+$/.test(formControl.value)) {
      return error;
    }

    const port = parseInt(formControl.value, 10);

    if (port < 0) {
      return error;
    }

    if (port > 65535) {
      return error;
    }

    return null;
  }

}
