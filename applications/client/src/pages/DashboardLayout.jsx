import React, { createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, Navbar, SmallSidebar } from '../components';

const DashboardContext = createContext();

export default function DashboardLayout() {
  //temp
  const user = { name: 'john' };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setisDarkTheme] = useState(false);

  function toggleDarkTheme() {
    console.log('toggle dark theme');
  }

  function toggleSidebar() {
    setShowSidebar(() => !showSidebar);
  }

  async function logoutUser() {
    console.log('logout user');
  }

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
}
//custom hook to export the main context
export const useDashboardContext = () => useContext(DashboardContext);
