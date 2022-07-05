import { useFetchGiphs } from '../hooks/useFetchGiphs';
import { GiphItem } from './GiphItem';

export const GiphGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGiphs( category );

    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && ( <h2>cargando...</h2> )
            }

            <div className='card-grid'>
               {
                    images.map( ( image ) => (
                        <GiphItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
               }
            </div>
        </>
    )
};
