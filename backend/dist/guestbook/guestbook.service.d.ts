import { SupabaseService } from '../supabase/supabase.service';
import { CreateGuestbookDto } from './dto/create-guestbook.dto';
export declare class GuestbookService {
    private readonly supabaseService;
    constructor(supabaseService: SupabaseService);
    findAll(): Promise<any[]>;
    create(createGuestbookDto: CreateGuestbookDto): Promise<any>;
}
