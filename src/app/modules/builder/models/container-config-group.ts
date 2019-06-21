import { ContainerConfigField } from './container-config-field';

export interface ContainerConfigGroup {
    id: string;
    label: string;
    editing: boolean;
    fields: Array<ContainerConfigField>;
}
