import { Module } from '@nestjs/common';
import { NaverAddController } from './naver_add.controller';
import { NaverAddService } from './naver_add.service';
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [HttpModule],

  controllers: [NaverAddController],
  providers: [NaverAddService]
})
export class NaverAddModule {}
