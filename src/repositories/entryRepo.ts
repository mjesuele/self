import slugify from "slugify";
import { Entry, hardcodedData } from "../hardcodedData";

export interface IEntryRepo {
  addEntry(title: string, date: Date): boolean;
  getEntryBySlug(slug: string): Entry | undefined;
}

export class EntryRepo implements IEntryRepo {
  public constructor(
    private dataAccess = hardcodedData,
  ) {}

  public addEntry(title: string, date: Date) {
    const slug = slugify(title);
    try {
      this.dataAccess.entries = [
        ...this.dataAccess.entries,
        {
          title,
          date,
          slug,
          content: {},
        },
      ];
    } catch (e) {
      return false;
    }
    
    return true;
  }

  public getEntryBySlug(slug: string) {
    return this.dataAccess.entries.find(e => e.slug === slug);
  }
}
