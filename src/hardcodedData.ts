export type Entry = {
  title: string,
  date: Date,
  slug: string,
};

const entries: Entry[] = [
  {
    title: "Birth",
    date: new Date("1988-12-28"),
    slug: "birth",
  },
];

export default {
  name: "Matthew Vincent Jesuele",
  entries,
};
