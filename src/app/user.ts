export class User {
    constructor(
        public login: string,
        public name: string,
        public email: string,
        public avatar: string,
        public repos: number,
        public followers: number,
        public following: number,
    ) {}
}
