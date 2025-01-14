export type Survey = {
  id: number;
  name: string;
};

export enum SurveyType {
  Numeric = 'numeric',
  Date = 'date',
  MCQ = 'mcq',
}

export type SurveyData = {
  label: string;
  type: SurveyType;
  answers: Array<number | string | boolean[]>;
  options?: string[];
};
