export default function MovieCard({data}) {
    return (
        <>
            <div className="max-w-screen-sm h-[300px] text-center overflow-hidden rounded-md relative shadow-[0_0_15px_rgba(0,0,0,0.6)] transition-all hover:scale-105 hover:shadow-[0_10px_35px_-15px_#1eff3c]">
                <span className="absolute top-0 left-0 z-[2] p-2 bg-gradient-to-r from-sky-900 to-fuchsia-900 text-white rounded-br-2xl shadow-sm shadow-gray-900">Phim cổ trang</span>
                <img src={"https://image.tmdb.org/t/p/original/"+data.poster_path} alt="" className="w-full h-full object-cover"/>
                <span className='absolute left-0 right-0 bottom-0 z-[2] bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg leading-10 truncate'>{data.original_title}</span>
            </div>
        </>
    )
}
