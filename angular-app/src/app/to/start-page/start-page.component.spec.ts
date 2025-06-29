import { ComponentFixture, TestBed } from '@angular/core/testing';

import { To_StartPageComponent } from './start-page.component';

describe('StartPageComponent', () => {
  let component: To_StartPageComponent;
  let fixture: ComponentFixture<To_StartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [To_StartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(To_StartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
