import { ContainerConfigGroup } from './container-config-group';

export class Container {
  id: string;
  name: string;
  logo: string;
  config: ContainerConfigGroup[];
}
