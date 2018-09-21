import slugify from "slugify";
import { Content, Entry, hardcodedData } from "../hardcodedData";

export type EntryParams = { title: string, date: Date, content?: Content };
export interface IEntryRepo {
  addEntry(params: EntryParams): boolean;
  getEntryBySlug(slug: string): Entry | undefined;
}

export class EntryRepo implements IEntryRepo {
  public constructor(
    private dataAccess = hardcodedData,
  ) {}

  public addEntry({ title, date, content = {} }: EntryParams) {
    const slug = slugify(title).toLowerCase();
    try {
      this.dataAccess.entries = [
        ...this.dataAccess.entries,
        {
          title,
          date,
          slug,
          content,
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
