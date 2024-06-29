import style from './title.module.css';

export default function Title() {
  return (
    <h1 className={style.title}>
      MBTI
      <span className='inline'>가 어떻게 되세요?</span>
    </h1>
  )
}