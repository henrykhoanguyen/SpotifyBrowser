import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaveTracksTableComponent } from './fave-tracks-table.component';

describe('FaveTracksTableComponent', () => {
  let component: FaveTracksTableComponent;
  let fixture: ComponentFixture<FaveTracksTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaveTracksTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaveTracksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
