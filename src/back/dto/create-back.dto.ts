import { ApiProperty } from "@nestjs/swagger";

export class CreateBackDto {
    @ApiProperty()
    name: string;

    @ApiProperty({ required: false })
    description?: string;

    @ApiProperty()
    fechaV: string;

    @ApiProperty({ default: 'pendiente' })
    estado: string;
}
