import './App.css';
import Banner from './components/banner/banner';
import Navbar from './components/navbar/navbar'
import Box from '@mui/material/Box';
import SliderComponent from './components/slider/slider';
import Cards from './components/cards/cards';
import Footer from './components/footer/footer'
function App() {
  return (

      <Box sx={{ flexGrow: 1 }}>
        <Navbar/>
        <Banner />
        <SliderComponent />
        <Cards/>
        <Footer/>
      </Box>

  );
}

export default App;