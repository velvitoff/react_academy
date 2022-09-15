import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Localize from '../../../components/common/localize';
import { Stack } from '@mui/material';

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function DeletePostModal({ open, closeCallback }) {

    const onCancel = () => {
        closeCallback(false);
    }

    const onSubmit = () => {
        closeCallback(true);
    }

    return (
        <Modal
            open={open}
            onClose={onCancel}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={boxStyle}>
                <Typography variant="h6" component="h2">
                    <Localize input="Are you sure you want to delete this post?"/>
                </Typography>
                <Stack direction="row">
                    <Button onClick={onCancel}>
                        <Localize input="Cancel"/>
                    </Button>
                    <Button onClick={onSubmit}>
                        <Localize input="Approve"/>
                    </Button>
                </Stack>
            </Box>
        </Modal>
    );
}