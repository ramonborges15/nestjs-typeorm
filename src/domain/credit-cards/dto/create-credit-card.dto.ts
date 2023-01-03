import { IsDateString, IsInt, IsNotEmpty, Length, Max, min, Min } from "class-validator";

// Documentation to class validator here https://github.com/typestack/class-validator
export class CreateCreditCardDto {
    @IsInt()
    limit: number;

    @Min(0)
    closingDayAt: number;

    @Min(0)
    dueDayAt: number;

    @Min(0)
    userId: number;

    @IsNotEmpty()
    @Length(5, 255)
    name: string;
}
