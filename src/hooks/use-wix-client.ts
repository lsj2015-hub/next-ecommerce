import { WixClientContext } from '@/context/wixContext';
import { useContext } from 'react';

export const useWixclient = () => {
  return useContext(WixClientContext);
};
