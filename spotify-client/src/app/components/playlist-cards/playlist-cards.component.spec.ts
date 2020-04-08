import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistCardsComponent } from './playlist-cards.component';

describe('PlaylistCardsComponent', () => {
  let component: PlaylistCardsComponent;
  let fixture: ComponentFixture<PlaylistCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
