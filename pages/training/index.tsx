import { NextPage } from "next"
import { fetcher } from '../../utils/fetch'
import { TData } from '../../utils/types'
import useSWR from "swr";
import GoBack from '../../components/GoBack'

const UserPage: NextPage<TData> = () => {
  const { data } = useSWR<any>('/training', fetcher); 

  if(!data) return <div>loading...</div>
  
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

export default UserPage;
