import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsTabsComponent } from './teams-tabs.component';

describe('TeamsTabsComponent', () => {
  let component: TeamsTabsComponent;
  let fixture: ComponentFixture<TeamsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
