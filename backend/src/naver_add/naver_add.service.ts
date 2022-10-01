import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';


@Injectable()
export class NaverAddService {
    constructor(
        private readonly httpService: HttpService,
    ) { }

    async getNaverAddInfo(options) {
        console.log("############################################" + JSON.stringify(options));
        return this.httpService.get(options.url, options.headers).subscribe(res => console.log("res : ", res))
    }

}
