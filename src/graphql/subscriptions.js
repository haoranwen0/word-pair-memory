/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuiz = /* GraphQL */ `
  subscription OnCreateQuiz($filter: ModelSubscriptionQuizFilterInput) {
    onCreateQuiz(filter: $filter) {
      id
      quiz
      submissions
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuiz = /* GraphQL */ `
  subscription OnUpdateQuiz($filter: ModelSubscriptionQuizFilterInput) {
    onUpdateQuiz(filter: $filter) {
      id
      quiz
      submissions
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuiz = /* GraphQL */ `
  subscription OnDeleteQuiz($filter: ModelSubscriptionQuizFilterInput) {
    onDeleteQuiz(filter: $filter) {
      id
      quiz
      submissions
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDefaultQuiz = /* GraphQL */ `
  subscription OnCreateDefaultQuiz(
    $filter: ModelSubscriptionDefaultQuizFilterInput
  ) {
    onCreateDefaultQuiz(filter: $filter) {
      id
      quizId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDefaultQuiz = /* GraphQL */ `
  subscription OnUpdateDefaultQuiz(
    $filter: ModelSubscriptionDefaultQuizFilterInput
  ) {
    onUpdateDefaultQuiz(filter: $filter) {
      id
      quizId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDefaultQuiz = /* GraphQL */ `
  subscription OnDeleteDefaultQuiz(
    $filter: ModelSubscriptionDefaultQuizFilterInput
  ) {
    onDeleteDefaultQuiz(filter: $filter) {
      id
      quizId
      createdAt
      updatedAt
    }
  }
`;
