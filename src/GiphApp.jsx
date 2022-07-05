import { useState } from 'react';
import { AddCategory, GiphGrid } from './components/';


export const GiphApp = () => {

    const [categories, setCategories] = useState( [] );

	const onAddCategory = ( newCategory ) => {

        if ( categories.includes( newCategory ) ) return;

		setCategories( [ newCategory, ...categories] )
	}

    return (
        <>
            <h1>Giph App</h1>

            <AddCategory 
                onNewCategory={ onAddCategory }
            />

            { 
                categories.map( ( category ) => (
                    <GiphGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </>	
    )
};
