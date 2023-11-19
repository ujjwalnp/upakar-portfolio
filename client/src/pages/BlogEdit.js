import React from 'react';
import Header from '../components/admin/Header';
import BlogEditComponent from '../components/admin/BlogEdit';

function BlogEdit() {
  return (
    <>
        <Header />
        <BlogEditComponent id="blog"/>
    </>
  );
};

export default BlogEdit;
