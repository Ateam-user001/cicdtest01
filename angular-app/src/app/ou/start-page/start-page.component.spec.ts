import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ou_StartPageComponent } from './start-page.component';

describe('StartPageComponent', () => {
  let component: Ou_StartPageComponent;
  let fixture: ComponentFixture<Ou_StartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ou_StartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ou_StartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
