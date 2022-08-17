import { Typography } from "@mui/material"
import { ProductMetaWrapper } from "../../styles/product"


const ProductMeta = ({product,matches}) => {
    return(
        <ProductMetaWrapper>
            <Typography variant={matches ? 'h6' : 'h5'} lineHeight={2}>
                {product.name}
            </Typography>
            <Typography variant={matches ? 'captions' : 'body1'}>
                ${product.price}
            </Typography>
        </ProductMetaWrapper>
    )
}

export default ProductMeta