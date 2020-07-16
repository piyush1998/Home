import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePropComponent } from './sale-prop.component';

describe('SalePropComponent', () => {
  let component: SalePropComponent;
  let fixture: ComponentFixture<SalePropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalePropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
