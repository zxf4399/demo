import { Controller, Get, Header, Res, StreamableFile } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';

@ApiTags('file')
@Controller()
export class FileController {
  @Get('1')
  getFile1(@Res() res: Response) {
    const file = createReadStream(join(process.cwd(), 'package.json'));

    file.pipe(res);
  }

  @Get('2')
  getFile2(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'package.json'));

    return new StreamableFile(file);
  }

  @Get('3')
  @Header('Content-Type', 'application/json')
  @Header('Content-Disposition', 'attachment; filename="package.json"')
  getFile3(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'package.json'));

    return new StreamableFile(file);
  }
}
