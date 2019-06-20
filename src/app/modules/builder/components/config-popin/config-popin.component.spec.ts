import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPopinComponent } from './config-popin.component';

describe('ConfigPopinComponent', () => {
  let component: ConfigPopinComponent;
  let fixture: ComponentFixture<ConfigPopinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigPopinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPopinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
