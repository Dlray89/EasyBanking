import { createMuiTheme} from '@material-ui/core'


//primary colors
const easyBlue = 'hsl(233, 26%, 24%)'
const easyGreen = 'hsl(136, 65%, 51%)'
const easyCyan = 'hsl(192, 70%, 51%)'


//secondary colors

const easyGrayBlue = 'hsl(233, 8%, 62%)'
const easyLightGrayishBlue = 'hsl(220, 16%, 96%)'
const easyLightGray = 'hsl(0, 0%, 98%)'
const easyWhite = 'hsl(0, 0%, 100%)'

export default createMuiTheme({
    palette:{
        common:{
            easyBlue: easyBlue,
            easyGreen: easyGreen,
            easyCyan: easyCyan,
            easyGrayBlue: easyGrayBlue,
            easyLightGrayishBlue: easyLightGrayishBlue,
            easyLightGray: easyLightGray,
            easyWhite: easyWhite
        },
        primary:{
            main: easyBlue,
            light: easyGrayBlue
            
        },
        secondary:{
            main: easyGreen,
        }

    },
    typography:{
        navigation:{
            fontFamily:'Public Sans, sans-serif',
            fontWeight: 600
        },
        button:{
            fontFamily:'Public Sans, sans-serif',
            fontWeight: 900
        }
    },
    overrides:{
        MuiTab:{
            root:{
            padding: 0,
            margin: 0
            }
        }
    }
})