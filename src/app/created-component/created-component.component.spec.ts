import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedComponentComponent } from './created-component.component';

describe('CreatedComponentComponent', () => {
  let component: CreatedComponentComponent;
  let fixture: ComponentFixture<CreatedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
