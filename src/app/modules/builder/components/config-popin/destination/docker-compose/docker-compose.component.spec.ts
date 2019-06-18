import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerComposeComponent } from './docker-compose.component';

describe('DockerComposeComponent', () => {
  let component: DockerComposeComponent;
  let fixture: ComponentFixture<DockerComposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DockerComposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
