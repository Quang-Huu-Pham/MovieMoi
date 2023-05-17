
export default function TopMovieItem({dataItem}) {
    return (
    <>
        <li className="flex items-center px-2 py-4 hover:bg-blue-gray-600 rounded-md">
            <img src={"https://image.tmdb.org/t/p/original/"+dataItem.backdrop_path} alt="" className="max-w-[65px] rounded-sm"/>
            <div className="text-white ml-3 truncate">
                <p className="text-lg">{dataItem.original_title}</p>
                <span className="text-xs flex items-center">{dataItem.vote_average}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-1 text-orange-700">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>  
                </span>
            </div>
        </li>
    </>
    )
}
