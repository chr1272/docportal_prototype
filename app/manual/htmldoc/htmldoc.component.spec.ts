import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmldocComponent } from './htmldoc.component';

describe('HtmldocComponent', () => {
  let component: HtmldocComponent;
  let fixture: ComponentFixture<HtmldocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmldocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmldocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
