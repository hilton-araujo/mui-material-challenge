import { Box } from '@mui/material'
import OnlineFriends from './rightComp/onlineFriends'
import LastestPhotos from './rightComp/lastestPhotos'
import LastestConversations from './rightComp/lastestConversations'

const RigthBar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={300}>
                <OnlineFriends />
                <LastestPhotos />
                <LastestConversations />
            </Box>
        </Box>
    )
}

export default RigthBar