import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';

import { Section } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Section>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </Section>
    </div>
  );
};