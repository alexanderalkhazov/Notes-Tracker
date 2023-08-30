import { Box } from "@mui/material";
import Notes from "../components/Notes";

const Feed = () => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={2}
            p={2}
        >
            <Notes />
        </Box>
    )
}

export default Feed