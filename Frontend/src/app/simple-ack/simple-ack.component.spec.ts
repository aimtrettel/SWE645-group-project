import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAckComponent } from './simple-ack.component';

describe('SimpleAckComponent', () => {
  let component: SimpleAckComponent;
  let fixture: ComponentFixture<SimpleAckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
