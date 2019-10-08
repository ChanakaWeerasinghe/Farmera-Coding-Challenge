import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogBookPage } from './log-book.page';

describe('LogBookPage', () => {
  let component: LogBookPage;
  let fixture: ComponentFixture<LogBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogBookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
