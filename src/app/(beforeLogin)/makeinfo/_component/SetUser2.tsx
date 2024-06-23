'use client';

import { useContext } from 'react';
import BirthdaySelect from './BirthdaySelect';
import MbtiSelect from './MbtiSelect';
import { setUserContext } from './SetUserProvider2';
import ReligionSelect from './ReligionSelect';
import TallSelect from './TallSelect';
import RegionSelect from './RegionSelect';
import NicknameSelect from './NicknameSelect';
import GenderSelect from './GenderSelect';
import DrinkSelect from './DrinkSelect';
import SmokeSelect from './SmokeSelect';
import SchoolSelect from './SchoolSelect';
import JobSelect from './JobSelect';
import ImageSelect from './ImageSelect';
import SetUserComplete from './SetUserComplete';

export default function SetUser() {
  const { progress } = useContext(setUserContext);
  return (
    <>
      {progress < 10 && <GenderSelect />}

      {progress === 10 && <BirthdaySelect />}

      {progress === 20 && <NicknameSelect />}

      {progress === 30 && <RegionSelect />}

      {progress === 40 && <TallSelect />}

      {progress === 50 && <ReligionSelect />}

      {progress === 60 && <DrinkSelect />}

      {progress === 65 && <SmokeSelect />}

      {progress === 70 && <SchoolSelect />}

      {progress === 75 && <JobSelect />}

      {progress === 80 && <ImageSelect />}

      {progress === 90 && <MbtiSelect />}

      {progress === 100 && <SetUserComplete />}
    </>
  )
}