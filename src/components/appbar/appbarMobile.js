import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import {IconButton}  from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import  SearchIcon  from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
 
const AppbarMobile = ({matches}) => {
    const {setDrawerOpen} = useUIContext()
    return(
        <AppbarContainer>
            <IconButton onClick={()=>setDrawerOpen(true)}>
                <MenuIcon/>
            </IconButton>
            <AppbarHeader textAlign={"center"} variant="h4">
                My Bags
            </AppbarHeader>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <Actions matches={matches}/>
        </AppbarContainer>
    )
}

export default AppbarMobile