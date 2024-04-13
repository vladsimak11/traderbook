import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

import { FormLogin, TitleLogin, InputLogin, ButtonLogin} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormLogin autoComplete="off" onSubmit={handleSubmit}>
      <TitleLogin>Login</TitleLogin>
      <InputLogin

        type="email"
        name="email"
        placeholder="vladsimak11@gmail.com"
      />

      <InputLogin
  
        type="password"
        name="password"
        placeholder="Password"
      />

      <ButtonLogin type="submit">
        Login
      </ButtonLogin>
    </FormLogin>
  );
};
