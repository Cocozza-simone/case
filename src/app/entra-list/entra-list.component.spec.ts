import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntraListComponent } from './entra-list.component';
import { describe, beforeEach, it } from 'node:test';

describe('EntraListComponent', () => {
  let component: EntraListComponent;
  let fixture: ComponentFixture<EntraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntraListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
