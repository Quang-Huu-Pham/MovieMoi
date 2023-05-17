import { useEffect, useState } from "react";

import { CategoryService, ListMovieService, TopMoviesService } from "../../Services/MovieService";
import Header from "../../components/Header";
import SlideShow from "../../components/SlideShow";
import MovieCard from "../../components/MovieCard";
import SideBar from "../../components/SlideBar/SideBar";

export default function Home() {
    const [categoryList, setCategoryList] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const [topMovies, setTopMovies] = useState([]);

    useEffect(() => {
        getCategoryList();
        getMovieList();
        getTopMovies();
    },[])

    const getCategoryList = async () => {
        let res = await CategoryService();
        if(res) {
            setCategoryList(res.genres)
        }
    }

    const getMovieList = async () => {
        let res = await ListMovieService();
        if(res && res.results) {
            setMovieList(res.results.slice(0,8))
        }
    }

    const getTopMovies = async () => {
        let res = await TopMoviesService();
        if(res && res.results) {
            setTopMovies(res.results.slice(0,8))
        }
    }

    console.log(topMovies);
    return (
        <>
            <Header data={categoryList}/>
            <div className="container mx-auto pt-12 p-4 bg-dark-900">
                <SlideShow posters={movieList}/>
                <h3 className="text-orange-500 text-[32px] border-l-4 mt-24 ps-3">PHIM ĐỀ CỬ</h3>
                <div className='flex w-full'>
                    <div className="mt-10 grid grid-cols-4 gap-10">
                        {
                            movieList && movieList.length > 0 &&
                            movieList.map((movie) => (
                                <MovieCard key={movie.id} data={movie}/>
                            ))
                        }
                    </div>
                    <SideBar data={topMovies}/>
                </div>
            </div>
        </>
    )
}