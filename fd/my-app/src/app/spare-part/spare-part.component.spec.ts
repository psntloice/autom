import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparePartComponent } from './spare-part.component';

describe('SparePartComponent', () => {
  let component: SparePartComponent;
  let fixture: ComponentFixture<SparePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SparePartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SparePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
