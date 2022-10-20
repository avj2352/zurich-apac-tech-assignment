import { IsNumberString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class UserQueryDTO {

    @ApiProperty({
        description: 'Pagination number',
        required: false
    })
    @IsNumberString()
    @IsOptional()
    page: number;

    constructor(page?: number) {
        this.page = page;
    }
}