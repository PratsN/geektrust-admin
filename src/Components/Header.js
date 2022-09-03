import React from "react";
import { Link} from 'react-router-dom';
import "./Header.css";
import { Stack , Box} from "@mui/material";

const Header = () => {
    return (
        <>
        
        
        <Link to="/"
        style={{ textDecoration: 'none' }}>
        <Box className="header">
            <Stack className="admin">Admin</Stack>
            <Stack className="ui">UI</Stack>
        </Box>
        </Link>


        </>

    )
}


export default Header;