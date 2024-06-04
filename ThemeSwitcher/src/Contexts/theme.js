//create context me ham variable or function ko bhi rakhte hai karte hai.Or isko ham ek const type ke varible me store kar dete hai.
//createContext se jo ham context create karte hai usi ko useContext me pass bhi karte hai..

import {createContext, useContext} from 'react';

//context create karne ke liye ham createContext me variable or methods dete hai.
export const ThemeContext = createContext({
    themeMode : "light", //variable 
    darkTheme : () => {}, //methods
    lightTheme : () => {}, //methods
})

export const ThemeProvider = ThemeContext.Provider;

//we created custom Hook below

export default function useTheme()
{
    return useContext(ThemeContext)
}
