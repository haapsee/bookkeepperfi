import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwarepageComponent } from './softwarepage.component';

describe('SoftwarepageComponent', () => {
  let component: SoftwarepageComponent;
  let fixture: ComponentFixture<SoftwarepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwarepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwarepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
