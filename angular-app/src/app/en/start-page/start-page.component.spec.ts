import { ComponentFixture, TestBed } from '@angular/core/testing';

import { En_StartPageComponent } from './start-page.component';

describe('StartPageComponent', () => {
  let component: En_StartPageComponent;
  let fixture: ComponentFixture<En_StartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [En_StartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(En_StartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
