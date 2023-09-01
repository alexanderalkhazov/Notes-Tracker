import { Button, AppBar, Toolbar, Box } from "@mui/material"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Box mb={1}>
            <AppBar position="static" sx={{
                backgroundColor: 'primary.light'
            }}>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Link
                        to={'/addnote'}
                    >
                        <Button
                            variant="contained"
                            size="small"     
                            color="inherit"                      
                        >
                            Add a New Note
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;