import { TestBed } from '@angular/core/testing';
import { RestService } from './rest.service';
describe('RestService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RestService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=rest.service.spec.js.map