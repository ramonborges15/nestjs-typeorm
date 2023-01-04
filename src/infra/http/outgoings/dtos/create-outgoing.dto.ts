import { IsBoolean, IsDateString, IsNotEmpty, Min } from "class-validator";

export class CreateOutgoingDto {
    @IsBoolean()
    paiedOut: boolean;

    @IsDateString()
    @IsNotEmpty()
    paiedOutAt: string;

    @Min(0)
    value: number;

    @Min(0)
    creditCardId: number;

    @Min(0)
    userId: number;
}
