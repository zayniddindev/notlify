import { IsNotEmpty } from 'class-validator';

export class SendTgMessageDto {
  @IsNotEmpty()
  uid: string;

  @IsNotEmpty()
  message: string;
}
