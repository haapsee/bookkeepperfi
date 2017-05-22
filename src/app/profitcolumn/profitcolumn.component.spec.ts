import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitcolumnComponent } from './profitcolumn.component';

describe('ProfitcolumnComponent', () => {
  let component: ProfitcolumnComponent;
  let fixture: ComponentFixture<ProfitcolumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitcolumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
