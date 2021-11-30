import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '@/components/Header';
import { Button } from '@/components/Button';

export default function Home() {
  return (
    <>
      <div className="flex justify-center text-blue-600 flex-col">
        <h1>Home</h1>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/counter">Counter</Link>
        </div>
      </div>
      <div className="mt-5">
        <Header title="hola" />
        <Button onClick={() => alert('hola')}>Heyo</Button>
      </div>
    </>
  );
}
