import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'blue' | 'gold';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('blue');
    const themeClass = theme === 'blue' ? 'theme-blue' : 'theme-gold';

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'blue' ? 'gold' : 'blue'));
    };

    useEffect(() => {
        document.documentElement.classList.remove('theme-blue', 'theme-gold');
        document.body.classList.remove('theme-blue', 'theme-gold');
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
