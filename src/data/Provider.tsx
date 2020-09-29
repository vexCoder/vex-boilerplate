import React from 'react';
import { RecoilRoot } from 'recoil';

interface ProviderProps {}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Provider;
