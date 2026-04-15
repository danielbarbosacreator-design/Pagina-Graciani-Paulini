import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AdminContextType {
  isAdminMode: boolean;
  toggleAdminMode: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Persist admin mode in localStorage so it survives refreshes
  useEffect(() => {
    const stored = localStorage.getItem('graciane_admin_mode');
    if (stored === 'true') {
      setIsAdminMode(true);
    }
  }, []);

  const toggleAdminMode = () => {
    setIsAdminMode((prev) => {
      const newState = !prev;
      localStorage.setItem('graciane_admin_mode', String(newState));
      return newState;
    });
  };

  return (
    <AdminContext.Provider value={{ isAdminMode, toggleAdminMode }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};