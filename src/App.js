import { Box, Container, Typography} from "@mui/material"
import { ThemeProvider } from "@mui/system";
import React,{ useEffect } from 'react';
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import AppDrawer from "./components/drawer";
import Product from "./components/product";
import Promotions from "./components/promotions";
import { UIProvider } from "./context/ui";
import Footer from "./footer";
import theme from "./styles/theme";

function App() {
  useEffect(()=>{
    document.title="React Material-UI Home";
  },[])

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background:"#fff"
        }}
        >
         <UIProvider>
         <Appbar/>
           <Banner/>
           <Promotions/>
           <Box display='flex' justifyContent={'center'} sx={{p:4}}>
             <Typography variant="h4">Our Products</Typography>
           </Box>
           <Product/>
           <Footer/>
           <AppDrawer/>
         </UIProvider>
        </Container>
    </ThemeProvider>
  
  );
}

export default App;
