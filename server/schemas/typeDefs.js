const typeDefs = `
  input BookInput {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    removeBook(bookId: ID!): User
    }

type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
    bookCount: Int
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

;

module.exports = typeDefs;
