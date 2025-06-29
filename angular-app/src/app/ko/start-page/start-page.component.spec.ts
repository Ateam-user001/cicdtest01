import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ko_StartPageComponent } from './start-page.component';

describe('StartPageComponent', () => {
  let component: Ko_StartPageComponent;
  let fixture: ComponentFixture<Ko_StartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ko_StartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ko_StartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
