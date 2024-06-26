import './App.css';
import HomePage from './routes/HomePage/HomePage';
import { useTheme } from './Context/themeContext';

function App() {
  const { displayMode } = useTheme();

  const darkThemeBackground = "#20232A";
  const darkThemeColor = "#E5FAFB";
  return (
    <div 
      className='home-page-container'
      style={{
        backgroundColor: displayMode === "light" ? "" : darkThemeBackground,
        color: displayMode === "light" ? "" : darkThemeColor,
        height: "100%",
      }}
    >
      <HomePage/>
    </div>
  )
}

export default App;
