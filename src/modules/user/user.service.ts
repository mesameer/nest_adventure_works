import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getAll() {
        return ["Get All Users1"];
    }
}
