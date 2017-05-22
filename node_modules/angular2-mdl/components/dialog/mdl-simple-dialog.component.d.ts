import { QueryList, ElementRef } from '@angular/core';
import { MdlDialogReference } from './mdl-dialog.service';
import { IMdlDialogAction, IMdlSimpleDialogConfiguration } from './mdl-dialog-configuration';
export declare class MdlSimpleDialogComponent {
    dialogConfiguration: IMdlSimpleDialogConfiguration;
    dialog: MdlDialogReference;
    buttons: QueryList<ElementRef>;
    constructor(dialogConfiguration: IMdlSimpleDialogConfiguration, dialog: MdlDialogReference);
    actionClicked(action: IMdlDialogAction): void;
    onEsc(): void;
}
