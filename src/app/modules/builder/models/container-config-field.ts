import { ContainerConfigFieldValidator } from './container-config-field-validator';

export interface ContainerConfigField {
  id: string;
  label: string;
  type: 'input' | 'checkbox' | 'select-single' | 'select-multiple' | 'select-container' | 'hidden' | string;
  base: string;
  destination: 'id' | 'version' | 'compose' | 'volumes' | 'ports' | 'environments' | 'files' | string;
  value: string;
  validators: Array<ContainerConfigFieldValidator>;
  source: Array<string>;
}
