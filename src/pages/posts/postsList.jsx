import React from 'react';
import Card from '@mui/material/Card';

export default function PostsList({ items }){
    console.log(items);
    return(
        <>
            {items.map((item) => (
                <Card key={item.id}>
                    {item.title}
                </Card>
            ))}
        </>
    );
}