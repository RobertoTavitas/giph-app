export const getGiphs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=MGz1ipOq3zRQ2wOFmeq9AYOWP7m0IT7d&q=${ category }&limit=10`;

    const resp = await fetch( url );

    const { data } = await resp.json();

    const giphs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return giphs;
};