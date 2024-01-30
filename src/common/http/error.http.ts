import { HttpException, HttpStatus } from '@nestjs/common';

export function HttpError(error: IHttpError) {
  throw new HttpException({ message: error?.code || error?.message }, error?.statusCode || HttpStatus.BAD_REQUEST);
}

interface IHttpError {
  code?: any;
  message?: any;
  statusCode?: any;
}
