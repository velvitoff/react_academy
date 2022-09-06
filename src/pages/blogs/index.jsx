import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { blogsRequest } from '../../services/bloggerService';
import { selectIsLoggedIn } from '../../store/slices/userSettingsSlice';
import BlogDisplay from './blogDisplay';
import MainGridWrapper from './mainGridWrapper';
import SkeletonBlogDisplay from './skeletonBlogDisplay';
import Localize from '../../components/common/localize';

export default function Blogs() {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingError, setIsLoadingError] = useState(false);


    useEffect(() => {
        if (isLoggedIn) {
            setIsLoading(true);
            blogsRequest()
                .then((response) => {
                    setItems(response.data.items);
                    setIsLoadingError(false);
                })
                .catch((err) => {
                    console.log(err);
                    setIsLoadingError(true);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }
    }, [isLoggedIn])

    if(!isLoggedIn){
        return(
            <Localize input={"You have to log in to see your list of blogs"}/>
        );
    }
    if (isLoading) {
        return (
            <MainGridWrapper>
                <SkeletonBlogDisplay />
                <SkeletonBlogDisplay />
            </MainGridWrapper>
        );
    }
    if (isLoadingError) {
        return (<Localize input={"Error loading..."}/>);
    }
    if (items.length === 0) {
        return (<Localize input={"No blogs"}/>);
    }

    return (
        <MainGridWrapper>
            {items.map((item) => (
                <BlogDisplay blog={item} key={item.id} />
            ))}
        </MainGridWrapper>
    );
}