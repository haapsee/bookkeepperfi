import { OnInit, AfterViewInit, ElementRef, QueryList, Renderer, OnDestroy } from '@angular/core';
import { MdlButtonComponent } from '../button/mdl-button.component';
import { MdlMenuItemComponent } from './mdl-menu-item.component';
import { MdlError } from '../common/mdl-error';
export declare class MdlMenuError extends MdlError {
}
export declare class MdlMenuRegisty {
    private menuComponents;
    add(menuComponent: MdlMenuComponent): void;
    remove(menuComponent: MdlMenuComponent): void;
    hideAllExcept(menuComponent: MdlMenuComponent): void;
}
export declare class MdlMenuComponent implements OnInit, AfterViewInit, OnDestroy {
    private renderer;
    private menuRegistry;
    position: string;
    containerChild: ElementRef;
    private container;
    menuElementChild: ElementRef;
    private menuElement;
    outlineChild: ElementRef;
    private outline;
    menuItemComponents: QueryList<MdlMenuItemComponent>;
    cssPosition: string;
    private isVisible;
    constructor(renderer: Renderer, menuRegistry: MdlMenuRegisty);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    toggle(event: Event, mdlButton: MdlButtonComponent): void;
    hideOnItemClicked(): void;
    hide(): void;
    show(event: any, mdlButton: any): void;
    private addAnimationEndListener();
    private applyClip(height, width);
    ngOnDestroy(): void;
}
