import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileModule } from './file/index.module';

@Module({
  imports: [FileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
