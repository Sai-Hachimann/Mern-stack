import React from 'react';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { useDashboardContext } from '../pages/DashboardLayout';
export default function SmallSidebar() {
  const data = useDashboardContext();
  console.log(data);
  return <Wrapper>SmallSidebar</Wrapper>;
}
