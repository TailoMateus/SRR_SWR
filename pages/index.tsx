import { NextPage } from "next";
import Link from 'next/link'
import { cacheData } from '../utils/fetch'

const style = {
  marginRight: 20,
}

const IndexPage: NextPage = () => {
  return (
    <>
      <Link href="profile" as="/profile">
        <a style={style} onClick={() => cacheData('/profile')}>
          Perfil
        </a>
      </Link>
      <Link href="team" as="/team">
        <a style={style} onClick={() => cacheData('/team')}>
          Time
        </a>
      </Link>
      <Link href="training" as="/training">
        <a style={style} onClick={() => cacheData('/training')}>
          Treinamento
        </a>
      </Link>
    </>
  );
};

export default IndexPage;
