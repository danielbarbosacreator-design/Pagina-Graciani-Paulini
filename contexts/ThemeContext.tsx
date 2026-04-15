import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'red' | 'gold';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('red');
    const themeClass = theme === 'red' ? 'theme-red' : 'theme-gold';

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'red' ? 'gold' : 'red'));
    };

    useEffect(() => {
        document.documentElement.classList.remove('theme-red', 'theme-gold');
        document.body.classList.remove('theme-red', 'theme-gold');
        document.documentElement.classList.add(themeClass);
        document.body.classList.add(themeClass);
    }, [themeClass]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
