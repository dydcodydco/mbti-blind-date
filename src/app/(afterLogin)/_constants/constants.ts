interface IMbtiCompatibility {
  [key: string]: {
    [key: string]: number;
  };
}

export const mbtiCompatibility: IMbtiCompatibility = {
  ENFJ: { ENFJ: 100, ENFP: 100, ENTJ: 80, ENTP: 100, ESFJ: 60, ESFP: 80, ESTJ: 40, ESTP: 100, INFJ: 80, INFP: 80, INTJ: 60, INTP: 100, ISFJ: 60, ISFP: 60, ISTJ: 40, ISTP: 80 },
  ENFP: { ENFJ: 100, ENFP: 100, ENTJ: 100, ENTP: 80, ESFJ: 80, ESFP: 60, ESTJ: 100, ESTP: 40, INFJ: 80, INFP: 80, INTJ: 100, INTP: 60, ISFJ: 60, ISFP: 60, ISTJ: 80, ISTP: 40 },
  ENTJ: { ENFJ: 80, ENFP: 100, ENTJ: 100, ENTP: 100, ESFJ: 40, ESFP: 100, ESTJ: 60, ESTP: 80, INFJ: 60, INFP: 100, INTJ: 80, INTP: 80, ISFJ: 40, ISFP: 80, ISTJ: 60, ISTP: 60 },
  ENTP: { ENFJ: 100, ENFP: 80, ENTJ: 100, ENTP: 100, ESFJ: 100, ESFP: 40, ESTJ: 80, ESTP: 60, INFJ: 100, INFP: 60, INTJ: 80, INTP: 80, ISFJ: 80, ISFP: 40, ISTJ: 60, ISTP: 60 },
  ESTJ: { ENFJ: 40, ENFP: 100, ENTJ: 60, ENTP: 80, ESFJ: 80, ESFP: 100, ESTJ: 100, ESTP: 100, INFJ: 60, INFP: 80, INTJ: 60, INTP: 60, ISFJ: 60, ISFP: 100, ISTJ: 80, ISTP: 80 },
  ESTP: { ENFJ: 100, ENFP: 40, ENTJ: 80, ENTP: 60, ESFJ: 100, ESFP: 80, ESTJ: 100, ESTP: 100, INFJ: 80, INFP: 40, INTJ: 60, INTP: 60, ISFJ: 100, ISFP: 60, ISTJ: 80, ISTP: 80 },
  ESFJ: { ENFJ: 60, ENFP: 80, ENTJ: 40, ENTP: 100, ESFJ: 100, ESFP: 100, ESTJ: 80, ESTP: 100, INFJ: 60, INFP: 60, INTJ: 40, INTP: 80, ISFJ: 80, ISFP: 80, ISTJ: 60, ISTP: 100 },
  ESFP: { ENFJ: 80, ENFP: 60, ENTJ: 100, ENTP: 40, ESFJ: 100, ESFP: 100, ESTJ: 100, ESTP: 80, INFJ: 60, INFP: 60, INTJ: 80, INTP: 40, ISFJ: 80, ISFP: 80, ISTJ: 100, ISTP: 60 },
  INFJ: { ENFJ: 80, ENFP: 80, ENTJ: 60, ENTP: 100, ESFJ: 60, ESFP: 60, ESTJ: 40, ESTP: 80, INFJ: 100, INFP: 100, INTJ: 80, INTP: 100, ISFJ: 60, ISFP: 80, ISTJ: 40, ISTP: 100 },
  INFP: { ENFJ: 80, ENFP: 80, ENTJ: 100, ENTP: 60, ESFJ: 60, ESFP: 60, ESTJ: 80, ESTP: 40, INFJ: 100, INFP: 100, INTJ: 100, INTP: 80, ISFJ: 80, ISFP: 60, ISTJ: 100, ISTP: 40 },
  INTJ: { ENFJ: 60, ENFP: 100, ENTJ: 80, ENTP: 80, ESFJ: 40, ESFP: 80, ESTJ: 60, ESTP: 60, INFJ: 80, INFP: 100, INTJ: 100, INTP: 100, ISFJ: 40, ISFP: 100, ISTJ: 60, ISTP: 80 },
  INTP: { ENFJ: 100, ENFP: 60, ENTJ: 80, ENTP: 80, ESFJ: 80, ESFP: 40, ESTJ: 60, ESTP: 60, INFJ: 100, INFP: 80, INTJ: 100, INTP: 100, ISFJ: 100, ISFP: 40, ISTJ: 80, ISTP: 60 },
  ISFJ: { ENFJ: 60, ENFP: 60, ENTJ: 40, ENTP: 80, ESFJ: 80, ESFP: 80, ESTJ: 60, ESTP: 100, INFJ: 60, INFP: 80, INTJ: 40, INTP: 100, ISFJ: 100, ISFP: 100, ISTJ: 80, ISTP: 100 },
  ISFP: { ENFJ: 60, ENFP: 60, ENTJ: 80, ENTP: 40, ESFJ: 80, ESFP: 80, ESTJ: 100, ESTP: 60, INFJ: 80, INFP: 60, INTJ: 100, INTP: 40, ISFJ: 100, ISFP: 100, ISTJ: 100, ISTP: 80 },
  ISTJ: { ENFJ: 40, ENFP: 80, ENTJ: 60, ENTP: 60, ESFJ: 60, ESFP: 100, ESTJ: 80, ESTP: 80, INFJ: 40, INFP: 100, INTJ: 60, INTP: 80, ISFJ: 80, ISFP: 100, ISTJ: 100, ISTP: 100 },
  ISTP: { ENFJ: 80, ENFP: 40, ENTJ: 60, ENTP: 60, ESFJ: 100, ESFP: 60, ESTJ: 80, ESTP: 80, INFJ: 100, INFP: 40, INTJ: 80, INTP: 60, ISFJ: 100, ISFP: 80, ISTJ: 100, ISTP: 100 },
};