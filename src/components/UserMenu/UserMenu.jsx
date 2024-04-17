import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';

import { UserNameBlock, UserNameText, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserNameBlock>
      <UserNameText>Welcome, {user.name}</UserNameText>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserNameBlock>
  );
};