import { OnChanges, SimpleChange, ModuleWithProviders } from '@angular/core';
export declare class MdlProgressComponent implements OnChanges {
    progress: number;
    buffer: number;
    aux: number;
    private _indeterminate;
    indeterminate: boolean;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    private setBuffer(b);
}
export declare class MdlProgressModule {
    static forRoot(): ModuleWithProviders;
}
