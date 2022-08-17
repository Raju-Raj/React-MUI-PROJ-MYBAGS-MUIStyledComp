// import { Box } from "@mui/system";
import {styled} from "@mui/material/styles";
import {Box,Button,Typography} from "@mui/material";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    width:'100%',
    height:'100%',
    padding:'0px 0px',
    background:Colors.light_gray,
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column',
        alignItems:'center'
    }
}));

export const BannerImage = styled('img')(({src,theme})=>({
    src:`url(${src})`,
    width:'500px',
    [theme.breakpoints.down('md')]:{
        width:'350px'
    },
    [theme.breakpoints.down('sm')]:{
        width:'320px'
    },

}));

export const BannerContent = styled(Box)(()=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    maxWidth:420,
    padding:'30px'
}));

export const BannerTitle = styled(Typography)(({theme})=>({
    lineHeight:1.5,
    fontSize:'72px',
    marginBottom:'20px',
    [theme.breakpoints.down('sm')]:{
        fontSize:'42px'
    }
}));

export const BannerDescription = styled(Typography)(({theme})=>({
    lineHeight:1.25,
    letterSpacing:1.25,
    marginBottom:'3rem',
    [theme.breakpoints.down("md")]:{
        lineHeight:1.15,
        letterSpacing:1.15,
        marginBottom:"1.5rem",
    },
}));


export const BannerShopButton = styled(Button,{
    shouldForwardProp:(props)=>props!=='color',
    name:'MyShopButton',
    slot:'Root',
    overridesResolver:(props,styles)=>[
        styles.root,
        props.color === 'primary' && styles.primary,
        props.color === 'secondary' && styles.secondary
    ],
})(({theme})=>({
    padding:'20px 0px',
    color:Colors.white,
    fontWeight:'bold',
    fontSize:'16px',
    [theme.breakpoints.down('sm')]:{
        padding:'10px 0px',
        fontSize:'14px'
    }
}))