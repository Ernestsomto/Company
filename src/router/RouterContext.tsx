import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type RoutePath =
  | '/'
  | '/about'
  | '/technology'
  | '/products'
  | '/people'
  | '/careers'
  | '/news'
  | '/contact'
  | string;

interface RouterContextValue {
  currentPath: string;
  navigate: (to: RoutePath) => void;
  isActive: (path: RoutePath, exact?: boolean) => boolean;
}

const RouterContext = createContext<RouterContextValue | undefined>(undefined);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path === '' ? '/' : path;
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: RoutePath) => {
    if (typeof window === 'undefined') return;
    if (to === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', to);
    setCurrentPath(to);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [currentPath]);

  const isActive = useCallback(
    (path: RoutePath, exact = false) => {
      if (path === '/' || exact) {
        return currentPath === path;
      }
      return currentPath === path || currentPath.startsWith(`${path}/`);
    },
    [currentPath]
  );

  return (
    <RouterContext.Provider value={{ currentPath, navigate, isActive }}>
      {children}
    </RouterContext.Provider>
  );
};

export function useRouter(): RouterContextValue {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}
