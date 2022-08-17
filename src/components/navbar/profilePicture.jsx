import React from 'react';

import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

export default function ProfilePicture() {
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open account">
                <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
        </Box>
    );
}