import { Avatar, AvatarGroup, Typography } from '@mui/material'

const OnlineFriends = () => {
    return (
        <>
            <Typography variant="h6" fontWeight={100}>
                Online Friends
            </Typography>
            <AvatarGroup max={7}>
                <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                />
                <Avatar
                    alt="Travis Howard"
                    src="https://material-ui.com/static/images/avatar/2.jpg"
                />
                <Avatar
                    alt="Cindy Baker"
                    src="https://material-ui.com/static/images/avatar/3.jpg"
                />
                <Avatar alt="Agnes Walker" src="" />
                <Avatar
                    alt="Trevor Henderson"
                    src="https://material-ui.com/static/images/avatar/6.jpg"
                />
                <Avatar
                    alt="Trevor Henderson"
                    src="https://material-ui.com/static/images/avatar/7.jpg"
                />
                <Avatar
                    alt="Trevor Henderson"
                    src="https://material-ui.com/static/images/avatar/8.jpg"
                />
                <Avatar
                    alt="Trevor Henderson"
                    src="https://material-ui.com/static/images/avatar/7.jpg"
                />
                <Avatar
                    alt="Trevor Henderson"
                    src="https://material-ui.com/static/images/avatar/8.jpg"
                />
            </AvatarGroup>
        </>
    )
}

export default OnlineFriends