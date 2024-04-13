import { AuthNavList, LinkRegister, LinkLogin } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavList>
      <LinkRegister to="/register">
        Register
      </LinkRegister>
      <LinkLogin to='/login'>
        Log In
      </LinkLogin>
    </AuthNavList>
  );
};
