import { createParamDecorator, ExecutionContext, Logger, UnauthorizedException } from "@nestjs/common";

/**
 * Custom Decorators for Authentication
 */
export const RequestHeader =  createParamDecorator(async (value:  any, ctx: ExecutionContext): Promise<string> => {
    const logger = new Logger('RequestHeader');    
    // extract headers
    const headers = ctx.switchToHttp().getRequest().headers;    
    if (headers && headers.accesstoken) {
        return headers.accesstoken;
    } else {
        throw new UnauthorizedException(`Unauthorized`);
    }
});