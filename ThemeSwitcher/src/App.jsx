import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Contexts/theme";
import { useEffect } from "react";

import Card from "./Components/Card";
import ThemeBtn from "./Components/ThemeBtn";

function App() {
 
  const [themeMode , setthemeMode] = useState("light");
   
   function darkTheme (){
    setthemeMode("dark");
   }

   const lightTheme = () => {
    setthemeMode("light");
   }

   useEffect(() => {
    document.querySelector("html").classList.remove("light" , "dark")
    document.querySelector("html").classList.add(themeMode)
   }, [themeMode])
   

   return (
    <ThemeProvider value ={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeButton */}
            <ThemeBtn/>
          </div> 


          <div className="w-full max-w-sm mx-auto">
            {/* cardinsert */}
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App;
