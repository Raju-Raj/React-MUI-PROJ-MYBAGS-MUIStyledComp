import { Stack } from "@mui/material"
import { Product, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/product"
import ProductMeta from "./ProductMeta";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';


const SingleProduct = ({product,matches}) => {
    return(
        <>
        <Product>
            <ProductImage src={product.image}/>
            <ProductMeta product={product} matches={matches}/>
            <ProductActionsWrapper>
                <Stack direction="row">
                    <ProductFavButton isFav={0}>
                        <FavoriteIcon/>
                    </ProductFavButton>
                    <ProductFavButton>
                        <ShareIcon/>
                    </ProductFavButton>
                    <ProductFavButton>
                        <FitScreenIcon/>
                    </ProductFavButton>
                </Stack>
            </ProductActionsWrapper>
            
        </Product>
        <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
        </>
    )
}

export default SingleProduct