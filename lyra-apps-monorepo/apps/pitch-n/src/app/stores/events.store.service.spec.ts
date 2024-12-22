import { TestBed } from '@angular/core/testing';

import { EventsStore } from './events.store';

describe('EventsStoreService', () => {
  let service: EventsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
