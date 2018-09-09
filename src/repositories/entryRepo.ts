import hardcodedData, { Entry } from "../hardcodedData";

export interface IEntryRepo {
  getEntryBySlug(slug: string): Entry | undefined;
}

export class EntryRepo implements IEntryRepo {
  public constructor(
    private dataAccess = hardcodedData,
  ) {}

  public getEntryBySlug(slug: string) {
    return this.dataAccess.entries.find(e => e.slug === slug);
  }
}
