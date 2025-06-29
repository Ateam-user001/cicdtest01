import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hou_StartPageComponent } from './start-page.component';

describe('StartPageComponent', () => {
  let component: Hou_StartPageComponent;
  let fixture: ComponentFixture<Hou_StartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hou_StartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hou_StartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
