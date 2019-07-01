import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContainerConfigGroup } from '../../models/container-config-group';
import { ContainerConfigField } from '../../models/container-config-field';
import { TitleService } from '../../../../core/services/title.service';

@Component({
    selector: 'app-builder-config',
    templateUrl: './config.component.html',
    styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

    @Input() imageName: string;
    @Input() logoUrl: string;
    @Input() tag: string;
    @Input() config: ContainerConfigGroup[];

    @Output() previous = new EventEmitter();
    @Output() next = new EventEmitter();

    public isPopinActive: boolean;
    public groups: ContainerConfigGroup[];

    public popinGroup: string;
    public popinFieldId: string;
    public popinField: ContainerConfigField;

    constructor(private titleService: TitleService) {
    }

    ngOnInit() {
        this.titleService.set('Configuration');
        this.isPopinActive = false;


        if (!this.logoUrl) {
            this.logoUrl = 'https://d36jcksde1wxzq.cloudfront.net/be7833db9bddb4494d2a7c3dd659199a.png';
        }

        this.groups = this.config;
        if (!this.config) {
            this.initEmptyConfig();
        }

    }

    private initEmptyConfig(): void {
        const id = this.imageName.replace('/', '-');

        this.groups = [];
        this.groups.push({
            id: 'group_0', label: 'Général', editing: false, fields: [
                {id: 'name', label: 'Container ID', type: 'input', destination: 'id', value: id, base: '', validators: [], source: []},
            ]
        });
    }

    public openAddPopIn(group: ContainerConfigGroup): void {
        this.isPopinActive = true;
        this.popinGroup = group.id;
    }

    public openEditPopIn(data: { group: ContainerConfigGroup, field: ContainerConfigField }): void {
        this.isPopinActive = true;
        this.popinGroup = data.group.id;
        this.popinFieldId = data.field.id;
        this.popinField = data.field;
    }

    public hidePopIn(): void {
        this.isPopinActive = false;
        this.popinGroup = '';
        this.popinFieldId = '';
        this.popinField = null;
    }

    public addGroup(): void {
        const group = {
            id: 'group_' + Math.random().toString(36).substring(8),
            label: '',
            editing: true,
            fields: []
        };
        this.groups.push(group);
    }

    public handleNext(): void {
        this.next.emit(this.groups);
    }

    public addField(data: any): void {
        const groups = [...this.groups];

        const index = groups.findIndex((element: ContainerConfigGroup) => element.id === this.popinGroup);

        if (!this.popinField) {
            groups[index].fields.push(data);
            this.groups = groups;
            this.hidePopIn();

            return;
        }

        const fieldIndex = groups[index].fields.findIndex((element) => element.id === this.popinFieldId);
        groups[index].fields[fieldIndex] = data;

        this.groups = groups;
        this.hidePopIn();
    }

    removeField(data: { group: ContainerConfigGroup, field: ContainerConfigField }): void {
        const groups = [...this.groups];

        const group = groups.find((element) => element.id === data.group.id);
        group.fields = group.fields.filter(element => element.id !== data.field.id);

        this.groups = groups;
    }

    updateGroup(event: ContainerConfigGroup[]) {
        this.groups = event;
    }

    goBack() {
        this.previous.emit(true);
    }
}
