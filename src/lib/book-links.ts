export const BOOK_LINKS = {
  main: "https://www.amazon.com/Mud-Hut-Star-Wars-Beyond/dp/180777094X/ref=mp_s_a_1_1?dib=eyJ2IjoiMSJ9.L28JgXcRgjQjSJrueFzs1qbcQxlPZgVxX-a2p2iUhNAw-b7-NNpC3wlqDpC07sj8ZedhBO1vgAmNwBy2wsP1Jw.n7Kwj6nJjKBWEzc25PnsOKHCh4C_4FdhrC_p26gWQrc&dib_tag=se&keywords=femi+taylor&qid=1785782483&s=books&sr=1-1",
  hardcover: "https://a.co/d/0jk6oFfu",
  paperback: "https://a.co/d/01ZOfw7z",
  ebook: "https://a.co/d/0dlFvN0B",
} as const;

export const BOOK_FORMATS = [
  {
    id: "hardcover",
    label: "Hardcover",
    price: "$24.99",
    url: BOOK_LINKS.hardcover,
  },
  {
    id: "paperback",
    label: "Paperback",
    price: "$14.99",
    url: BOOK_LINKS.paperback,
  },
  {
    id: "ebook",
    label: "E-Book",
    price: "$9.99",
    url: BOOK_LINKS.ebook,
  },
] as const;
