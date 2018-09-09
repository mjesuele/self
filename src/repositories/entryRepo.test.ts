import { Data } from "../hardcodedData";
import { EntryRepo } from "./entryRepo";

function subject(dataAccess: any) {
  return new EntryRepo(dataAccess);
}

it("finds an entry by slug", () => {
  const repo = subject(testDataAccess());

  expect(repo.getEntryBySlug("birth")).toHaveProperty("slug", "birth");
  expect(repo.getEntryBySlug("death")).toBe(undefined);
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
