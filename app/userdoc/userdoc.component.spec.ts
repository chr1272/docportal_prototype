import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdocComponent } from './userdoc.component';

describe('UserdocComponent', () => {
  let component: UserdocComponent;
  let fixture: ComponentFixture<UserdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
