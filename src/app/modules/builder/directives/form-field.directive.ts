import { ComponentFactoryResolver, Directive, Input, OnInit, Type, ViewContainerRef } from '@angular/core';
import { VoidComponent } from '../components/fields/void/void.component';
import { InputComponent } from '../components/fields/input/input.component';
import { ContainerConfigField } from '../models/container-config-field';

@Directive({
    selector: '[appGeneratorFormField]'
})
export class FormFieldDirective implements OnInit {

    @Input() appFormField: ContainerConfigField;
    @Input() appFormControl: string;

    constructor(private viewContainer: ViewContainerRef, private factory: ComponentFactoryResolver) {
    }

    ngOnInit(): void {
        const componentType = this.getComponentType();
        const componentFactory = this.factory.resolveComponentFactory(componentType);

        const component = this.viewContainer.createComponent(componentFactory);
        component.instance.formControl = this.appFormControl;
        component.instance.field = this.appFormField;
    }

    private getComponentType(): Type<any> {
        const mapping = {
            input: InputComponent,
            // 'checkbox': CheckboxComponent,
            // 'select-single': SelectSingleComponent,
            // 'select-multiple': SelectMultipleComponent,
            // 'select-container': SelectContainerComponent,
        };

        if (!mapping[this.appFormField.type]) {
            return VoidComponent;
        }

        return mapping[this.appFormField.type];
    }
}
