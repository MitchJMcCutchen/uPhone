import { TestBed, inject } from '@angular/core/testing';
import { Http, HttpModule, Response, ResponseOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { PhoneStockService } from './phone-stock.service';

function createResponse(body) {
  return Observable.of(
    new Response(new ResponseOptions({ body: JSON.stringify(body) }))
  )
}

const phones = [{
  id: 1,
  price: 800,
  name: 'Mini',
  img: '/assets/imgs/banana_mini.png'
},
{
  id: 2,
  price: 1100,
  name: 'XL',
  img: '/assets/imgs/banana_xl.png'
}];

class MockHttp {
  get() {
    return createResponse([]);
  }
}

describe('PhoneStockService', () => {

  let phoneService: PhoneStockService;
  let http: Http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PhoneStockService,
        { provide: Http, useClass: MockHttp }
      ],
      imports: [
        HttpModule
      ]
    });
    http = TestBed.get(Http);
    phoneService = TestBed.get(PhoneStockService);
  });

  it('should be created', inject([PhoneStockService], (service: PhoneStockService) => {
    expect(service).toBeTruthy();
  }));

  it('should get phones', () => {
    spyOn(http, 'get').and.returnValue(createResponse([...phones]));

    phoneService.getPhones()
      .subscribe((result) => {
        expect(result.length).toBe(2);
        expect(result).toEqual(phones);
      })
  })
});
