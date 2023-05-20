import { useEffect, useState } from "react";

import { CategoryService, ListMovieService, NewMoviesService, TopMoviesService } from "../../Services/MovieService";
import Header from "../../components/Header";
import SlideShow from "../../components/SlideShow";
import SideBar from "../../components/SlideBar/SideBar";
import MoviesList from "../../components/MoviesList/MoviesList";
import Paginate from "../../components/Paginate/Paginate";

export default function Home() {
    const [categoryList, setCategoryList] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [newMovies, setNewMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        getCategoryList();
        getMovieList(1);
        getTopMovies();
        getNewMovies();
    },[])

    const getCategoryList = async () => {
        let res = await CategoryService();
        if(res) {
            setCategoryList(res.genres)
        }
    }

    const getMovieList = async (page) => {
        let res = await ListMovieService(page);

        console.log(res);
        if(res && res.results) {
            setMovieList(res.results.slice(0,8))
            setTotalPages(res.total_pages);
        }
    }

    const getTopMovies = async () => {
        let res = await TopMoviesService();
        if(res && res.results) {
            setTopMovies(res.results.slice(0,8))
        }
    }

    const getNewMovies = async () => {
        let res = await NewMoviesService();
        if(res && res.results) {
            setNewMovies(res.results.slice(0,8))
        }
    }

    const handlePageClick = (event) => {
        getMovieList(event.selected+1);
    }

    return (
        <>
            <Header data={categoryList}/>
            <div className="container mx-auto pt-12 p-4 bg-dark-900">
                <SlideShow posters={movieList}/>
                <div className='flex justify-between w-full mt-24'>
                    <div className="">
                        <MoviesList title='PHIM ĐỀ CỬ' movieList={movieList}/>
                        <Paginate onClick={handlePageClick} totalPages={totalPages}/>
                        <MoviesList title='PHIM SẮP CHIẾU' movieList={newMovies} className='mt-24'/>
                    </div>
                    <SideBar data={topMovies}/>
                </div>
            </div>
        </>
    )
}