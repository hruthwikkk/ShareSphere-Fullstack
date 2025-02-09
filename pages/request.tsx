// pages/index.tsx
import type { NextPage } from 'next';
import ButtonGroup from '@/components/ui/ButtonGroup';
import { useEffect } from 'react';

const Home: NextPage = () => {
        useEffect(() => {
            document.documentElement.classList.add("dark");
        }, []);
  return (
    <div>
      <ButtonGroup />
    </div>
  );
};

export default Home;