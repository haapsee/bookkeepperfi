import { QueryList, AfterContentInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MdlTabPanelComponent } from './mdl-tab-panel.component';
export declare class MdlTabsComponent implements AfterContentInit, OnChanges {
    private _selectedIndex;
    selectedIndex: number;
    private _isRipple;
    isRipple: boolean;
    selectedTabEmitter: EventEmitter<{}>;
    tabs: QueryList<MdlTabPanelComponent>;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): any;
    private updateSelectedTabIndex();
    tabSelected(tab: MdlTabPanelComponent): void;
}
