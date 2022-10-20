import { Controller, Get, Res } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { Response } from 'express';
import { getGoogleClientURL, getServerName, getServerVersion } from "../../util/config.util";

@Controller('')
export class HealthController {
    @Get('')
    @ApiOperation({ description: `Display API is working and show swagger links` })
    async displayHealth (@Res() res: Response) {
        res.json({
            name: getServerName(),
            version: getServerVersion(),
            clientURL: getGoogleClientURL(),
            health: 'Good - OK',
            swaggerLinks: [
                {health: `/swagger/api/health`},
                {auth: `/swagger/api/auth`},
                {users: `/swagger/api/users`}
            ]
        });
    }

}