import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';
import { initializeForm } from '../slices/formularioSlice';

export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(initializeForm([]));
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}