import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusListAdminComponent } from './bus-list-admin.component';

describe('BusListAdminComponent', () => {
  let component: BusListAdminComponent;
  let fixture: ComponentFixture<BusListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusListAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
