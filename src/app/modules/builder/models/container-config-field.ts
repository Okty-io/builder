import { ContainerConfigFieldValidator } from './container-config-field-validator';

export interface ContainerConfigField {
  id: string;
  label: string;
  type: 'input' | 'checkbox' | 'select-single' | 'select-multiple' | 'select-container' | 'hidden';
  base: string;
  destination: 'id' | 'version' | 'compose' | 'volumes' | 'ports' | 'environments' | 'files';
  value: string;
  validators: Array<ContainerConfigFieldValidator>;
  source: Array<{ [key: string]: string }>;
}
