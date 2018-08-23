import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditContainerComponent } from './card-edit-container.component';

describe('CardEditContainerComponent', () => {
  let component: CardEditContainerComponent;
  let fixture: ComponentFixture<CardEditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEditContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
