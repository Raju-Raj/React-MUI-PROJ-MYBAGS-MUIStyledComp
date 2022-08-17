import { useTheme } from "@mui/material/styles";
import {useMediaQuery,Typography} from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";

const Banner = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return(
        <BannerContainer>
            <BannerImage src="/images/banner/banner.png"/>
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant="h2">
                    New Bags
                </BannerTitle>
                <BannerDescription variant="subtitle">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </BannerDescription>
                <BannerShopButton color="primary">Show Now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner