import TopMovieItem from "./TopMovieItem";

export default function SideBar({data}) {
    return (
        <>
            <nav className="w-1/4 ml-3">
                <ul className="relative bg-[#0a0e16] w-full pt-9 pb-2 px-2 rounded-md">
                    <span className="absolute top-0 left-0 translate-y-[-50%] text-white text-lg px-3 py-2 bg-gradient-to-l from-cyan-500 to-blue-500 rounded-tr-2xl shadow-sm shadow-orange-400">Xem nhiều nhất</span>
                    {
                        data && data.length > 0 &&
                        data.map((item) => (
                            <TopMovieItem key={item.id} dataItem={item}/>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}
