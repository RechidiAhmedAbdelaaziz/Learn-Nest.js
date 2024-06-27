import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private dummyData = [{ "name": "User 1", "email": "ahmed@gmail.com" }];

    fetchAll() {
        return this.dummyData;
    }
}
