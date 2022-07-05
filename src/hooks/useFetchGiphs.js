import { useEffect, useState } from 'react';
import { getGiphs } from '../helpers/getGiphs';

export const useFetchGiphs = ( category ) => {

    const [images, setImages] = useState( [] );
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGiphs( category );
        setImages( newImages );
        setIsLoading( false );
    };

    useEffect( () => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }

}
