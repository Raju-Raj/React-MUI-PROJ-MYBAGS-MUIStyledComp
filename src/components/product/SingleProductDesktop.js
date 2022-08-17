import { Stack } from "@mui/material"
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/product"
import ProductMeta from "./ProductMeta";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import { useState } from "react";


const SingleProductDesktop = ({product,matches}) => {
    const [showOptions,setShowOptions] = useState(false)

    const handleMouseEnter = () => {
        setShowOptions(true)
    }

    const handleMouseLeave = () => {
        setShowOptions(false)
    }
    return(
        <>
        <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ProductImage src={product.image}/>
            <ProductFavButton isFav={0}>
                <FavoriteIcon/>
            </ProductFavButton>
            {
                showOptions && <ProductAddToCart show={showOptions} variant="contained">
                    Add to cart
                </ProductAddToCart>
            }
            
            
            <ProductActionsWrapper show={showOptions}>
                <Stack direction="column">
                    <ProductActionButton>
                        <ShareIcon/>
                    </ProductActionButton>
                    <ProductActionButton>
                        <FitScreenIcon/>
                    </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
        <ProductMeta product={product} matches={matches}/>
        
        </>
    )
}

export default SingleProductDesktop