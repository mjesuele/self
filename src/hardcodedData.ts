export type Content = {
  text?: string,
  images?: string[],
};

export type Entry = {
  title: string,
  date: Date,
  slug: string,
  content: Content,
};

const entries: Entry[] = [
  {
    title: "Birth",
    date: new Date("1988-12-28"),
    slug: "birth",
    content: {
      text: "Matt was born",
      images: ["https://loremflickr.com/320/240"],
    },
  },
];

export type Data = {
  name: string,
  entries: Entry[],
};

export const hardcodedData: Data = {
  name: "Matthew Vincent Jesuele",
  entries,
};
