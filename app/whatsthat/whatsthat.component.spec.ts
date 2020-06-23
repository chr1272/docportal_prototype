import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsthatComponent } from './whatsthat.component';

describe('WhatsthatComponent', () => {
  let component: WhatsthatComponent;
  let fixture: ComponentFixture<WhatsthatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsthatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsthatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
