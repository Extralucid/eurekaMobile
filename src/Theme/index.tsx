import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { StatusBar, StatusBarStyle, ColorSchemeName, Appearance } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

// Assuming Light and Dark themes are objects.
// If they have a specific structure, a Theme interface should be defined.
import lightTheme from './Light';
import darkTheme from './Dark';

// Define the type for the theme mode
type ThemeMode = ColorSchemeName;

// Define the interface for the context value
interface ThemeContextValue {
    mode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
}

// Get the default mode from Appearance, defaulting to 'light' if null
const defaultMode: ThemeMode = Appearance.getColorScheme() || 'light';

// Create the context with a default value matching the interface
const ThemeContext = createContext<ThemeContextValue>({
    mode: defaultMode,
    setMode: (mode: ThemeMode) => console.log(mode), // Default dummy function
});

// Custom hook to use the ThemeContext
const useThemeContext = (): ThemeContextValue => useContext(ThemeContext);

// Props interface for the provider components
interface ThemeProviderProps {
    children: ReactNode;
}

// Component that manages the theme state and provides it via context
const ManageThemeProvider = ({ children }: ThemeProviderProps) => {
    // State to hold the current theme mode
    const [themeState, setThemeState] = useState<ThemeMode>(defaultMode);

    // Function to set the theme mode state
    const setMode = (mode: ThemeMode) => {
        setThemeState(mode);
    };

    // Effect to listen for system theme changes
    useEffect(() => {
        // Add a listener for Appearance color scheme changes
        const subscription = Appearance.addChangeListener(({ colorScheme }: { colorScheme: ColorSchemeName }) => {
            // Update the theme state when the system theme changes
            setThemeState(colorScheme);
        });

        // Cleanup function to remove the listener
        return () => subscription.remove();
    }, []); // Empty dependency array means this effect runs only once on mount

    // Determine the status bar style based on the current theme state
    const statusBarStyle: StatusBarStyle = themeState === 'light' ? 'dark-content' : 'light-content';

    return (
        // Provide the current mode and the setMode function via ThemeContext
        <ThemeContext.Provider value={{ mode: themeState, setMode }}>
            {/* Provide the actual theme object to styled-components ThemeProvider */}
            <ThemeProvider
                theme={themeState === 'dark' ? darkTheme : lightTheme}
            >
                {/* Use a fragment to wrap the StatusBar and children */}
                <>
                    {/* Set the status bar style */}
                    <StatusBar
                        barStyle={statusBarStyle}
                    />
                    {/* Render the children components */}
                    {children}
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

// Top-level component that wraps the theme provider with AppearanceProvider
const ThemeManager = ({ children }: ThemeProviderProps) => (
    // AppearanceProvider is required for Appearance API to work correctly
    //<AppearanceProvider>
        
        <ManageThemeProvider>{children}</ManageThemeProvider>
    //</AppearanceProvider>
);

// Export the hook and theme objects
export { useThemeContext, lightTheme, darkTheme };

// Export the main ThemeManager component as default
export default ThemeManager;
