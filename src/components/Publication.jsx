export const Publication = ({ item }) => {
    return (
        <article>
            <img 
                src={'https://image.tmdb.org/t/p/w500/' + item.poster_path}
                alt={item.title} />
            <h2>{item.title}</h2>
            <h3>Overview</h3>
            <p>{item.overview}</p>
            <h3>Genres</h3>
            {item.genres.map(genre => (
                <p key={genre.id}>{genre.name}</p>
            ))}
            
            <p>Additional information</p>
        </article>
    )
}