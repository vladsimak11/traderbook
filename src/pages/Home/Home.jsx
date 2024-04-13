import { Helmet } from 'react-helmet';
import { Header1, HeaderBlock } from './Home.styled';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      
      <HeaderBlock>
        <Header1>
          Welcome to your TraderBook
        </Header1>
      </HeaderBlock>
    </div>
  );
}