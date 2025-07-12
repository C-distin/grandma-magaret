export interface BookSummary {
  slug: string
  title: string
  cover: string
  description: string
}

export interface BookDetail extends BookSummary {
  details: string
  buyLink: string
}

export const bookList: BookSummary[] = [
  {
    slug: "to-vow-or-not-to-vow",
    title: "To Vow or Not to Vow",
    cover: "/books/vow-cover.jpg",
    description: "A cultural exploration of marriage vows and modern relationships.",
  },
  {
    slug: "behind-closed-doors",
    title: "Behind Closed Doors: Guarding Your Dreams",
    cover: "/books/guarding-dreams.jpg",
    description: "A guide to nurturing unspoken aspirations and overcoming self-doubt.",
  },
]

export const booksData: Record<string, BookDetail> = {
  "to-vow-or-not-to-vow": {
    slug: "to-vow-or-not-to-vow",
    title: "To Vow or Not to Vow",
    cover: "/books/vow-cover.jpg",
    description: "A cultural exploration of marriage vows and modern relationships.",
    details:
      "Dive into the complexities of commitment in a rapidly evolving world. This book blends research, personal anecdotes, and cultural analysis to question the relevance of traditional vows.",
    buyLink: "https://www.amazon.com/Vow-Not-Knowing-Implications-Vows/dp/1460007786/",
  },
  "behind-closed-doors": {
    slug: "behind-closed-doors",
    title: "Behind Closed Doors: Guarding Your Dreams",
    cover: "/books/guarding-dreams.jpg",
    description: "A guide to nurturing unspoken aspirations and overcoming self-doubt.",
    details:
      "Margaret’s latest work explores the power of unspoken dreams and how to protect them from external pressures.",
    buyLink: "https://www.amazon.com/Behind-Closed-Doors-Guarding-Dreams-ebook/dp/B0CKWH6RCC/",
  },
}
