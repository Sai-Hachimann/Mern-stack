import React from 'react';
import { Outlet } from 'react-router-dom';
import { Logo } from '../components';
export default function HomeLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
