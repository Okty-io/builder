import { Component, Input } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../../../core/services/api.service';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { ContainerService } from '../../services/container.service';

@Component({
    selector: 'app-builder-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {

    preview = '';
    loading = true;
    faSpinner = faSpinner;

    constructor(private api: ApiService, private containerService: ContainerService) {
    }

    @Input() image: string;
    @Input() tag: string;

    @Input() set config(config) {
        this.loading = true;

        const data = {
            id: '',
            image: this.image,
            config: {}, // Empty
            form: {
                id: this.image,
                name: this.image,
                config
            }
        };

        const apiArg = this.containerService.formDataToApiArg(data);
        if (!apiArg.args.version) {
            apiArg.args.version = this.tag;
        }

        this.updatePreview(apiArg);
    }

    private updatePreview(apiArg: any): void {
        this.api.post('preview', {...apiArg, builder: true})
            .pipe(
                map((response: { content: string }) => response.content),
                catchError((error: HttpErrorResponse) => throwError(error.message))
            )
            .toPromise()
            .then((response) => this.setPreview(response))
            .catch(() => this.setPreview(undefined));
    }

    private setPreview(data: string) {
        if (data === undefined) {
            this.preview = '# Configuration is not valid';
            this.loading = false;

            return;
        }

        this.loading = !data;
        this.preview = YAML.stringify(data, 8);
    }
}
