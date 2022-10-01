import { NaverAddService } from './naver_add.service';
import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import { Controller, Get, Req, UseInterceptors } from '@nestjs/common';
import * as CryptoJS from 'crypto-js'

var method = "GET";
var api_url = "/keywordstool";
var timestamp = Date.now() + '';
var secretKey = process.env.SECRET_KEY

var method = "GET";
var timestamp = Date.now() + '';
var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
hmac.update(timestamp + '.' + method + '.' + api_url);
var hash = hmac.finalize();
hash.toString(CryptoJS.enc.Base64);


@Controller('naver_add')
@UseInterceptors(SuccessInterceptor)
export class NaverAddController {

    constructor(
        private readonly naverAddService: NaverAddService
    ) { }

    @Get()
    getNaverAddInfo() {
        const api_key = process.env.API_KEY;
        const secret_key = process.env.SECRET_KEY;
        const customer_id = process.env.CUSTOMER_ID;
        const base_url = process.env.BASE_URL
        const uri = '/customer-links'

        const options = {
            url: base_url + uri,
            params: { 'type': 'MYCLIENTS' },
            headers: {
                'X-Timestamp': timestamp, 'X-API-KEY': api_key,
                'X-API-SECRET': secret_key, 'X-CUSTOMER': customer_id, 'X-Signature': hash.toString(CryptoJS.enc.Base64)
            }
        };

        const result = this.naverAddService.getNaverAddInfo(options)
        console.log("result : ", result);

    }

}
