import { Data } from "../hardcodedData";
import { EntryRepo } from "./entryRepo";

function subject(dataAccess: any) {
  return new EntryRepo(dataAccess);
}
describe("EntryRepo", () => {
  it("finds an entry by slug", () => {
    const repo = subject(testDataAccess());

    expect(repo.getEntryBySlug("birth")).toHaveProperty("slug", "birth");
    expect(repo.getEntryBySlug("death")).toBe(undefined);
  });

  it("adds an entry", () => {
    const repo = subject(testDataAccess());
    repo.addEntry({ title: "foo", date: new Date() });

    expect(repo.getEntryBySlug("foo")).toHaveProperty("title", "foo");
  });

  it("removes an entry", () => {
    const repo = subject(testDataAccess());
    repo.removeEntry("birth");

    expect(repo.getEntryBySlug("birth")).toBeUndefined();
  });

  it ("updates an entry", () => {
    const repo = subject(testDataAccess());

    repo.updateEntry("birth", {
      title: "Left Womb",
      date: new Date("1988-12-29"),
      content: {
        text: "Matt left the womb",
      },
    });

    expect(repo.getEntryBySlug("birth")).toBeUndefined();

    const newEntry = repo.getEntryBySlug("left-womb");
    expect(newEntry).toHaveProperty("title", "Left Womb");
    // Content text should be updated
    expect(newEntry).toHaveProperty("content.text", "Matt left the womb");
    // Content image should be unchanged
    expect(newEntry).toHaveProperty("content.images.0", "https://loremflickr.com/320/240");
  });

  function testDataAccess(props?: Partial<Data>): Data {
    return {
      name: "Foouser",
      entries: [
        {
          title: "Birth",
          date: new Date("1988-12-28"),
          slug: "birth",
          content: {
            text: "Matt was born",
            images: ["https://loremflickr.com/320/240"],
          },
        },
      ],
      ...props,
    };
  }
});
