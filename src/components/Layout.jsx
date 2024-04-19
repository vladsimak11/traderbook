import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';

import { Section } from './Layout.styled';
import { Footer } from './Footer/Footer';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Section>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </Section>
      <Footer/>
    </div>
  );
};