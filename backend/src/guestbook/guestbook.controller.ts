import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { GuestbookService } from './guestbook.service';
import { CreateGuestbookDto } from './dto/create-guestbook.dto';

@Controller('api/guestbook')
export class GuestbookController {
  constructor(private readonly guestbookService: GuestbookService) {}

  @Get()
  async findAll() {
    try {
      return await this.guestbookService.findAll();
    } catch (error) {
      throw new HttpException(
        'Failed to fetch guestbook entries',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post()
  async create(@Body() createGuestbookDto: CreateGuestbookDto) {
    try {
      if (!createGuestbookDto.name || !createGuestbookDto.message) {
        throw new HttpException(
          'Name and message are required',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (createGuestbookDto.name.length > 100) {
        throw new HttpException(
          'Name must be 100 characters or less',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (createGuestbookDto.message.length > 500) {
        throw new HttpException(
          'Message must be 500 characters or less',
          HttpStatus.BAD_REQUEST,
        );
      }

      return await this.guestbookService.create(createGuestbookDto);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to create guestbook entry',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
