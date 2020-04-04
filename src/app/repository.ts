export class Repository {
    constructor(
        public repo_name: string,
        public description: string,
        public html_url: string,
        public created_at: string,
        public updated_at: string,
    ) {}
}
