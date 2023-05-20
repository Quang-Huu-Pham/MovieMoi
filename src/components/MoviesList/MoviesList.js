import MovieCard from "./MovieCard";

export default function MoviesList({title, movieList, className}) {
    return (
        <>
            <div className={className}>
                <h3 className="text-orange-500 text-[32px] border-l-4 ps-3">{title}</h3>
                <div className="mt-10 grid grid-cols-4 gap-10">
                    {
                        movieList && movieList.length > 0 &&
                        movieList.map((movie) => (
                            <MovieCard key={movie.id} data={movie}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
