import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sato_StartPageComponent } from './start-page.component';

describe('StartPageComponent', () => {
  let component: Sato_StartPageComponent;
  let fixture: ComponentFixture<Sato_StartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sato_StartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sato_StartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
