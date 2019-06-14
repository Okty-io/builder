import { ContainerConfigField } from './container-config-field';

export interface ContainerConfigGroup {
    id: string;
    label: string;
    fields: Array<ContainerConfigField>;
}
