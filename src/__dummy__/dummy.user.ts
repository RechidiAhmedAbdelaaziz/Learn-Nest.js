import { User } from "src/graphql/models/user";

export const DummyUser = [
    new User(
        {
            id: 1,
            username: 'john',
            email: 'jhon@rechidi.com',
            rating: 4.5,
            displayName: 'John Doe',
        },
    ),
    new User(
        {
            id: 2,
            username: 'jane',
            email: 'jane@da.d',
            rating: 3.5,
        },
    )

]