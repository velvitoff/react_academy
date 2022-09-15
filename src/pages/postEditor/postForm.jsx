import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Alert, Box, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import useLocalize from '../../hooks/useLocalize';
import Snackbar from '@mui/material/Snackbar';

import Localize from '../../components/common/localize';
import './postEditor.css';

export default function PostForm({ isEdit, publishCallback, initialData }) {

    const titleLabel = useLocalize("Article title");
    const [errorBarOpen, setErrorBarOpen] = useState(false);

    const { handleSubmit, control } = useForm({
        defaultValues: {
            title: initialData.title,
            content: initialData.content
        }
    });

    const onSubmit = data => {
        if (data.title === "") {
            setErrorBarOpen(true);
            window.setTimeout(() => setErrorBarOpen(false), 2000);
            return;
        }

        publishCallback(data);
    }


    return (
        <>
            <Box id="post-editor-wrap">
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) =>
                        <TextField {...field} label={titleLabel} variant="standard" />}
                />

                <Box id="post-editor">
                    <Controller
                        name="content"
                        control={control}
                        render={({ field }) =>
                            <ReactQuill {...field} theme="snow" />}
                    />
                </Box>

                <Button
                    onClick={handleSubmit(onSubmit)}
                    variant="outlined"
                    endIcon={<SendIcon />}
                >
                    <Localize input={isEdit ? "Edit article" : "Publish article"} />
                </Button>
            </Box >

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={errorBarOpen}
                message="I love snacks"
            >
                <Alert severity="error">
                    <Localize input="Invalid input" />
                </Alert>
            </Snackbar>
        </>
    );
}