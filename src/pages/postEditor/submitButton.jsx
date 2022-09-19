import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import Localize from '../../components/common/localize';

export default function SubmitButton({ isEdit, onClick }) {
    return (
        <Button
            onClick={onClick}
            variant="outlined"
            endIcon={<SendIcon />}
        >
            <Localize input={isEdit ? "Save article" : "Publish article"} />
        </Button>
    );
}