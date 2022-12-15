/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz(
    $input: CreateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    createQuiz(input: $input, condition: $condition) {
      id
      quiz
      submissions
      createdAt
      updatedAt
    }
  }
`;
export const updateQuiz = /* GraphQL */ `
  mutation UpdateQuiz(
    $input: UpdateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    updateQuiz(input: $input, condition: $condition) {
      id
      quiz
      submissions
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuiz = /* GraphQL */ `
  mutation DeleteQuiz(
    $input: DeleteQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    deleteQuiz(input: $input, condition: $condition) {
      id
      quiz
      submissions
      createdAt
      updatedAt
    }
  }
`;
export const createDefaultQuiz = /* GraphQL */ `
  mutation CreateDefaultQuiz(
    $input: CreateDefaultQuizInput!
    $condition: ModelDefaultQuizConditionInput
  ) {
    createDefaultQuiz(input: $input, condition: $condition) {
      id
      quizId
      createdAt
      updatedAt
    }
  }
`;
export const updateDefaultQuiz = /* GraphQL */ `
  mutation UpdateDefaultQuiz(
    $input: UpdateDefaultQuizInput!
    $condition: ModelDefaultQuizConditionInput
  ) {
    updateDefaultQuiz(input: $input, condition: $condition) {
      id
      quizId
      createdAt
      updatedAt
    }
  }
`;
export const deleteDefaultQuiz = /* GraphQL */ `
  mutation DeleteDefaultQuiz(
    $input: DeleteDefaultQuizInput!
    $condition: ModelDefaultQuizConditionInput
  ) {
    deleteDefaultQuiz(input: $input, condition: $condition) {
      id
      quizId
      createdAt
      updatedAt
    }
  }
`;
