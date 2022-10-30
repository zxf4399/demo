import { Module } from '@nestjs/common';
import { FileController } from './index.controller';

@Module({
  controllers: [FileController],
})
export class FileModule {}
