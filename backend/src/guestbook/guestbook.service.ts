import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateGuestbookDto } from './dto/create-guestbook.dto';

@Injectable()
export class GuestbookService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async findAll() {
    const supabase = this.supabaseService.getClient();
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async create(createGuestbookDto: CreateGuestbookDto) {
    const supabase = this.supabaseService.getClient();
    const { data, error } = await supabase
      .from('guestbook')
      .insert([
        {
          name: createGuestbookDto.name,
          message: createGuestbookDto.message,
        },
      ])
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
