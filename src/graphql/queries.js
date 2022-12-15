/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuiz = /* GraphQL */ `
  query GetQuiz($id: ID!) {
    getQuiz(id: $id) {
      id
      quiz
      submissions
      createdAt
      updatedAt
    }
  }
`;
export const listQuizzes = /* GraphQL */ `
  query ListQuizzes(
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizzes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quiz
        submissions
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDefaultQuiz = /* GraphQL */ `
  query GetDefaultQuiz($id: ID!) {
    getDefaultQuiz(id: $id) {
      id
      quizId
      createdAt
      updatedAt
    }
  }
`;
export const listDefaultQuizs = /* GraphQL */ `
  query ListDefaultQuizs(
    $filter: ModelDefaultQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDefaultQuizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quizId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
