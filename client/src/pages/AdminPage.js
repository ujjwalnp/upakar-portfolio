import React from 'react';
import Header from '../components/admin/Header';
import About from '../components/admin/About';
import User from '../components/admin/User';
import Security from '../components/admin/Security';
import Skills from '../components/admin/Skills';
import Services from '../components/admin/Services';

function AdminPage() {
  return (
    <>
      <Header />
      <User id="user" />
      <About id="about" />
      <Skills id="skills" />
      <Services id="services" />
      <Security id="security" />
    </>
  );
};

export default AdminPage;
