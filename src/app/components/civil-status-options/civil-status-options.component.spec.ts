import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilStatusOptionsComponent } from './civil-status-options.component';

describe('CivilStatusOptionsComponent', () => {
  let component: CivilStatusOptionsComponent;
  let fixture: ComponentFixture<CivilStatusOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilStatusOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivilStatusOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
