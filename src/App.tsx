import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { IndexPage } from './pages/index-page';
import { SomePages } from './pages/some-pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='*' element={<SomePages />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
