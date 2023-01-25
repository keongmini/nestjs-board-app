import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusOption(value)) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }

    return value;
  }

  private isStatusOption(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
