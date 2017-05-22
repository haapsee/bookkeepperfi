import { OnChanges, ElementRef, Renderer, ModuleWithProviders, SimpleChanges } from '@angular/core';
export declare class MdlBadgeDirective implements OnChanges {
    private elementRef;
    private renderer;
    private el;
    mdlBadgeContent: string;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class MdlBadgeOverlapDirective {
}
export declare class MdlBadgeNoBackgroundDirective {
}
export declare class MdlBadgeModule {
    static forRoot(): ModuleWithProviders;
}
