import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KbarticlesComponent } from './kbarticles.component';

describe('KbarticlesComponent', () => {
  let component: KbarticlesComponent;
  let fixture: ComponentFixture<KbarticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KbarticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KbarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
