import React from "react";
import Main from '../components/layout/main';
import Index from '../components/home/home';

export default function Home() {
  return (
    <Main children={<Index/>}/>
  );
}