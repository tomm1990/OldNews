import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BygenyearComponent } from './bygenyear.component';

describe('BygenyearComponent', () => {
  let component: BygenyearComponent;
  let fixture: ComponentFixture<BygenyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BygenyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BygenyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
