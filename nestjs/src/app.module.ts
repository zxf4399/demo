import { Module } from '@nestjs/common';
import { FileModule } from './file/file.module';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [FileModule, HelloModule],
})
export class AppModule {}
