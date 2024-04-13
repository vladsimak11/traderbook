import { useAuth } from '../../hooks/useAuth';
import { Nav, Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  
  return (
    <Nav >
      <Link to="/">
        Home
      </Link>
      { isLoggedIn && (
      <Link to="/coins">
        Coins
      </Link>)}
    </Nav>
  );
};