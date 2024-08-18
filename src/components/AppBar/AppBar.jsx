import { Navigation } from '../Navigation/Navigation';
import { DisplayBtc } from '../DisplayBtc/DisplayBtc';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';

import { Header} from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      <DisplayBtc/>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>


  )
};