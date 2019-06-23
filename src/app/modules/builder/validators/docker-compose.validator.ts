import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable()
export class DockerComposeValidator {

  static baseAllowed(formControl: FormControl): ValidationErrors | null {
    const error = {docker_compose_base: {valid: false}};

    if (!formControl.value) {
      return null;
    }

    const allowed: string[] = [
      'command',
      'restart',
      'user',
      'working_dir'
    ];

    if (!allowed.includes(formControl.value)) {
      return error;
    }

    return null;
  }
}
