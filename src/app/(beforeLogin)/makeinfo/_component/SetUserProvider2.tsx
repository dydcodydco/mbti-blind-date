'use client';

import { ReactNode, createContext, useMemo, useState, Dispatch, SetStateAction } from 'react';

export type ReligionType = {
  ko: string;
  en: string;
  checked?: boolean;
};

type SetUserContextType = {
  mbti: string;
  setMbti: Dispatch<SetStateAction<string>>;
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  nickname: string;
  setNickname: Dispatch<SetStateAction<string>>;
  birthdayYear: number;
  setBirthdayYear: Dispatch<SetStateAction<number>>;
  birthdayMonth: number;
  setBirthdayMonth: Dispatch<SetStateAction<number>>;
  birthdayDay: number;
  setBirthdayDay: Dispatch<SetStateAction<number>>;
  regionArr: string[];
  region: string;
  setRegion: Dispatch<SetStateAction<string>>;
  tallArr: number[];
  tall: number;
  setTall: Dispatch<SetStateAction<number>>;
  religionArr: ReligionType[],
  religion: ReligionType,
  setReligion: Dispatch<SetStateAction<ReligionType>>;
  drink: string,
  setDrink: Dispatch<SetStateAction<string>>;
  smoke: string,
  setSmoke: Dispatch<SetStateAction<string>>;
  school: string;
  setSchool: Dispatch<SetStateAction<string>>;
  job: string;
  setJob: Dispatch<SetStateAction<string>>;
  userImages: File[];
  setUserImages: Dispatch<SetStateAction<File[]>>;
};

const defaultValues: SetUserContextType = {
  mbti: '',
  setMbti: () => {},
  progress: 0,
  setProgress: () => {},
  gender: '',
  setGender: () => {},
  nickname: '',
  setNickname: () => {},
  birthdayYear: new Date().getFullYear() - 20,
  setBirthdayYear: () => {},
  birthdayMonth: 1,
  setBirthdayMonth: () => {},
  birthdayDay: 1,
  setBirthdayDay: () => {},
  regionArr: [],
  region: '서울',
  setRegion: () => {},
  tallArr: Array.from({ length: 61 }, (_, i) => i + 140),
  tall: 160,
  setTall: () => {},
  religionArr: [],
  religion: {ko: '', en: ''},
  setReligion: () => {},
  drink: '',
  setDrink: () => { },
  smoke: '',
  setSmoke: () => { },
  school: '',
  setSchool: () => { },
  job: '',
  setJob: () => { },
  userImages: [],
  setUserImages: () => {},
};

export const setUserContext = createContext<SetUserContextType>(defaultValues);

type Props = { children: ReactNode };

export default function SetUserProvider({ children }: Props) {
  const [mbti, setMbti] = useState('');
  const [progress, setProgress] = useState(0);
  const [gender, setGender] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthdayYear, setBirthdayYear] = useState(new Date().getFullYear() - 20);
  const [birthdayMonth, setBirthdayMonth] = useState(1);
  const [birthdayDay, setBirthdayDay] = useState(1);
  const regionArr = useMemo(() => {
    return ['서울', '부산', '인천', '대구', '대전', '광주', '울산', '세종', '경기도', '충청북도', '충청남도', '전라남도',
  '경상북도', '경상남도', '강원', '전북', '제주도']
  }, []);
  const [region, setRegion] = useState(regionArr[0]);
  const tallArr: number[] = Array.from({ length: 61 }, (_, i) => i + 140);  // 명시적으로 타입을 지정
  const [tall, setTall] = useState(tallArr[20]);
  const religionArr: ReligionType[] = useMemo(() => {
    return [
      { ko: "기독교", en: "Christianity" },
      { ko: "천주교", en: "Catholicism" },
      { ko: "불교", en: "Buddhism" },
      { ko: "힌두교", en: "Hinduism" },
      { ko: "이슬람교", en: "Islam" },
      { ko: "유대교", en: "Judaism" },
      { ko: "무교", en: "Non-religious" },
      { ko: "기타", en: "Other" }
    ]
  }, []);
  const [religion, setReligion] = useState({ko: '', en: ''});
  const [drink, setDrink] = useState('');
  const [smoke, setSmoke] = useState('');
  const [school, setSchool] = useState('');
  const [job, setJob] = useState('');
  const [userImages, setUserImages] = useState<File[]>([]);

  const contextValue = useMemo(() => ({
    mbti, setMbti, progress, setProgress, gender, setGender, nickname, setNickname, birthdayYear, setBirthdayYear, birthdayMonth, setBirthdayMonth,
    birthdayDay, setBirthdayDay, regionArr, region, setRegion, tallArr, tall, setTall, religion, setReligion, religionArr, drink, setDrink,
    smoke, setSmoke, school, setSchool, job, setJob, userImages, setUserImages
  }), [mbti, progress, gender, nickname, birthdayYear, birthdayMonth, birthdayDay,
    regionArr, region, tallArr, tall, religion, setReligion, religionArr, drink,
    setDrink, smoke, setSmoke, school, setSchool, job, setJob, userImages, setUserImages]);

  return (
    <setUserContext.Provider value={contextValue}>
      {children}
    </setUserContext.Provider>
  );
}