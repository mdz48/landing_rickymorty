import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacacterComponent } from './characacter.component';

describe('CharacacterComponent', () => {
  let component: CharacacterComponent;
  let fixture: ComponentFixture<CharacacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
