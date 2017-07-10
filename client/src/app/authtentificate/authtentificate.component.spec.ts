import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthtentificateComponent } from './authtentificate.component';

describe('AuthtentificateComponent', () => {
  let component: AuthtentificateComponent;
  let fixture: ComponentFixture<AuthtentificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthtentificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthtentificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
