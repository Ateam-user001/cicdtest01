import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nei_PollListComponent } from './poll-list.component';

describe('PollListComponent', () => {
  let component: Nei_PollListComponent;
  let fixture: ComponentFixture<Nei_PollListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nei_PollListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nei_PollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
