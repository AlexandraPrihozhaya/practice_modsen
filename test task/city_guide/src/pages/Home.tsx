import React from 'react';
import SideBarMenu from '../components/Sidebar';
import MyMap from '../components/Ymap';

const Home = () => {
  return (
    <section style={{ display: 'flex' }}>
      <SideBarMenu />
      <MyMap />
    </section>
  );
};

export default Home;
