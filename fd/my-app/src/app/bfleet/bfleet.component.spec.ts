import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfleetComponent } from './bfleet.component';

describe('BfleetComponent', () => {
  let component: BfleetComponent;
  let fixture: ComponentFixture<BfleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BfleetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BfleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
