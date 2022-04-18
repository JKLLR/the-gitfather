export class UsersClass {
    constructor(
        public following:string,
        public followers:string,
        public login: string,
        public avatar_url:string,
        public public_repos?:number,
        public created_at?: Date,
    ){

    }
}
