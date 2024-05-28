import MainTitle from '@/app/(afterLogin)/_component/MainTitle';
import SearchForm from './_component/SearchForm';
import SearchResult from './_component/SearchResult';

type Props = {
  searchParams: { q: string, f?: string, pf?: string };
}

export default function SearchPage({searchParams}: Props) {
  return (
    <>
      <MainTitle>검색</MainTitle>
      {/* <SearchForm /> */}
      <div className='p-2 pb-[100px]'>
        <SearchResult searchParams={searchParams} />
      </div>
    </>
  )
}