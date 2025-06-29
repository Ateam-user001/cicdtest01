import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nei_StartPageComponent } from './start-page.component';

describe('Nei_StartPageComponent', () => {
  let component: Nei_StartPageComponent;
  let fixture: ComponentFixture<Nei_StartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nei_StartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nei_StartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
