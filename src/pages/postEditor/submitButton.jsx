import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';

import Localize from '../../components/common/localize';

export default function SubmitButton({ isEdit, onClick }) {
    return (
        <Button
            sx={{
                borderColor: "text.primary",
                '&:hover': {
                    borderColor: "text.primary"
                }
            }}
            onClick={onClick}
            variant="outlined"
            endIcon={<SendIcon sx={{ color: "text.primary" }}/>}
        >
            <Typography color="text.primary">
                <Localize input={isEdit ? "Save article" : "Publish article"} />
            </Typography>
        </Button>
    );
}