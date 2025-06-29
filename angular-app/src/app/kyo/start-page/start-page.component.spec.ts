import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kyo_StartPageComponent } from './start-page.component';

describe('StartPageComponent', () => {
  let component: Kyo_StartPageComponent;
  let fixture: ComponentFixture<Kyo_StartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kyo_StartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kyo_StartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
