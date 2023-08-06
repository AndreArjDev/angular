export class Quote {
  constructor(
    public quote?: string,
    public author?: string) {}

    static fromJson(json: any): Quote {
      return Object.assign(new Quote(), json);
    }


}
