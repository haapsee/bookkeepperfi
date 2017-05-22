import { TemplateRef, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdlDialogService, MdlDialogReference } from './mdl-dialog.service';
import { IMdlDialogConfiguration } from './mdl-dialog-configuration';
export declare class MdlDialogComponent {
    private dialogService;
    template: TemplateRef<any>;
    private _modal;
    modal: boolean;
    config: IMdlDialogConfiguration;
    showEmitter: EventEmitter<MdlDialogReference>;
    hideEmitter: EventEmitter<void>;
    private isShown;
    private dialogRef;
    constructor(dialogService: MdlDialogService);
    show(): Observable<MdlDialogReference>;
    close(): void;
}
