import React from 'react';
import Header from '../components/admin/Header';
import About from '../components/admin/About';
import User from '../components/admin/User';
import Security from '../components/admin/Security';
import Skills from '../components/admin/Skills';

function AdminPage() {
  return (
    <>
        <Header />
        <User />
        <About />
        <Skills />
        <Security />
    </>
  );
};

export default AdminPage;
