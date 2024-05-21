'use client';

import { useContext } from 'react';
import BirthdaySelect from './BirthdaySelect';
import MbtiSelect from './MbtiSelect';
import { setUserContext } from './SetUserProvider';
import style from '../userSetting.module.css'
import ReligionSelect from './ReligionSelect';
import TallSelect from './TallSelect';
import RegionSelect from './RegionSelect';
import NicknameSelect from './NicknameSelect';
import GenderSelect from './GenderSelect';

export default function SetUser() {
  const { progress } = useContext(setUserContext);
  return (
    <>
      {progress < 10 && <GenderSelect />}

      <BirthdaySelect />

      {progress === 20 && <NicknameSelect />}

      <RegionSelect />

      <TallSelect />

      <ReligionSelect />

      {progress === 80 && <MbtiSelect />}
    </>
  )
}