import * as React from 'react';
import { ShoppingBasket } from '@mui/icons-material';
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@material-ui/core"

function Header({handleCart, orderLen}) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    // color = "rgb(51, 166, 178)"
                    component="span"
                    sx={{flexGrow: 1}}
                >
                    ChuShop
                </Typography>
                <IconButton
                    color="inherit"
                    onClick={handleCart}
                >
                    <Badge
                        color="secondary"
                        badgeContent={orderLen}
                    >
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header