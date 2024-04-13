import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import { FormReg, TitleReg, InputReg, ButtonReg} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormReg autoComplete="off" onSubmit={handleSubmit}>
      <TitleReg>Registration</TitleReg>
      <InputReg
        type="text"
        name="name"
        placeholder="Vladyslav"
      />

      <InputReg
        type="email"
        name="email"
        placeholder="vladsimak11@gmail.com"
      />

      <InputReg
        type="password"
        name="password"
        placeholder="Password"
      />

      <ButtonReg type="submit">
        Register
      </ButtonReg>
    </FormReg>
  );
};
