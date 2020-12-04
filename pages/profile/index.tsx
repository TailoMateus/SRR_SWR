import { NextPage } from "next";
import { fetcher } from '../../utils/fetch'
import useSWR from "swr";
import { TData } from '../../utils/types'
import GoBack from '../../components/GoBack'

const IndexPage: NextPage<TData> = () => {
  const { data } = useSWR<any>('/profile', fetcher);

  if (!data) return <div>loading...</div>

  return (
    <>
      {data?.map(({ id, name }) => {
        return (
          <div key={id}>
            <a>{name}</a>
          </div>
        )
      })}

      <GoBack />
    </>
  );
};

export default IndexPage;
