import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import MasterBackdrop from '../components/MasterBackdrop';

interface BackdropContextInterface {
  setLoading: (loading: boolean) => void;
}

const BackdropContext = createContext<BackdropContextInterface>({} as BackdropContextInterface);

export function BackdropProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false);

  const setLoading = (loading: boolean) => {
    setActive(loading);
  };

  const value = useMemo(() => ({ active, setLoading }), [setLoading, active]);

  return (
    <BackdropContext.Provider value={value}>
      <>
        <MasterBackdrop open={active} />
        {children}
      </>
    </BackdropContext.Provider>
  );
}

export function useLoading(loading: boolean) {
  const { setLoading } = useContext(BackdropContext);

  useEffect(() => {
    setLoading(loading);
  }, [loading]);
  // return
}
