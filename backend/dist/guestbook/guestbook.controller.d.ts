import { GuestbookService } from './guestbook.service';
import { CreateGuestbookDto } from './dto/create-guestbook.dto';
export declare class GuestbookController {
    private readonly guestbookService;
    constructor(guestbookService: GuestbookService);
    findAll(): Promise<any[]>;
    create(createGuestbookDto: CreateGuestbookDto): Promise<any>;
}
