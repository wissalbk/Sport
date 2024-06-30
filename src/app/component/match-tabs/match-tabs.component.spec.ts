import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTabsComponent } from './match-tabs.component';

describe('MatchTabsComponent', () => {
  let component: MatchTabsComponent;
  let fixture: ComponentFixture<MatchTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
