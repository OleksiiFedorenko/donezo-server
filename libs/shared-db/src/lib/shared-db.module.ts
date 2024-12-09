import { Module } from '@nestjs/common';
import { SharedDbService } from './shared-db.service';

@Global()
@Module({
  controllers: [],
  providers: [SharedDbService],
  exports: [SharedDbService],
})
export class SharedDbModule {}
