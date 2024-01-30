import { ExceptionFilter, Catch, ArgumentsHost, BadRequestException } from '@nestjs/common';
import { Request, Response } from 'express';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CoreApiResponse } from './response.http';
import { isObject } from 'class-validator';

export const getStatusCode = (exception: unknown): number => {
  return exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
};

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    if (isObject(exception.response)) {
      exception.response.path = request.path;
      exception.response.method = request.method;
    }
    const code = getStatusCode(exception);
    if (code >= 500) {
      console.error(exception);
    }
    response.status(code).json(
      CoreApiResponse.error({
        message: exception?.message || exception?.response || exception,
      }),
    );
  }
}

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    if (isObject(exception.response)) {
      exception.response.path = request.path;
      exception.response.method = request.method;
    }
    const code = getStatusCode(exception);
    if (code >= 500) {
      console.error(exception);
    }
    response.status(code).json(
      CoreApiResponse.error({
        message: exception?.response || exception?.message || exception,
      }),
    );
  }
}
