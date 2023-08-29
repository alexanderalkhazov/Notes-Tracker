import { Button, Stack } from "@mui/material"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{
                paddingBottom: 1,
                paddingTop: 1,
            }}
        >
            <Link
                to={'/addnote'}
            >
                <Button
                    variant="contained"
                    size="medium"
                >
                    Add a New Note
                </Button>
            </Link>
        </Stack>
    )
}

export default Navbar;