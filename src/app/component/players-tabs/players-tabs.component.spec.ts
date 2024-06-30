import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersTabsComponent } from './players-tabs.component';

describe('PlayersTabsComponent', () => {
  let component: PlayersTabsComponent;
  let fixture: ComponentFixture<PlayersTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
