import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsColumnComponent } from './assets-column.component';

describe('AssetsColumnComponent', () => {
  let component: AssetsColumnComponent;
  let fixture: ComponentFixture<AssetsColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
