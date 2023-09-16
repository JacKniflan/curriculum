import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HobbiesPage } from './hobbies.page';

describe('HobbiesPage', () => {
  let component: HobbiesPage;
  let fixture: ComponentFixture<HobbiesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HobbiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
