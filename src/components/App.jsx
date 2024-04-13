import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { Route, Routes } from 'react-router-dom';

import { refreshUser } from '../redux/auth/operations';

import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

import {ThreeDots} from '../Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const CoinsPage = lazy(() => import('../pages/Coins/Coins'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (<ThreeDots />) : (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage />} />

          <Route path="/register" element={<RestrictedRoute redirectTo="/coins" component={<RegisterPage />}  />} />

          <Route path="/login" element={<RestrictedRoute redirectTo="/coins" component={<LoginPage />} />} />

          <Route path="/coins" element={<PrivateRoute redirectTo="/login" component={<CoinsPage />} />} />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
};
