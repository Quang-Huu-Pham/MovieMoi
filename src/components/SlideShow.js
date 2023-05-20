import { Carousel } from "@material-tailwind/react";

export default function SlideShow({posters}) {
    return (
    <Carousel
        className="max-w-screen-2xl rounded-xl shadow-lg"
        navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                    <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                        }`}
                        onClick={() => setActiveIndex(i)}
                    />
                ))}
            </div>
        )}
    >

        {
            posters && posters.length > 0 &&
            posters.map((poster) => (
                <img
                    key={poster.id}
                    src={"https://image.tmdb.org/t/p/original/"+poster.backdrop_path}
                    alt="image 1"
                    className="w-full max-h-[500px] object-cover"
                />
            ))
        }
    </Carousel>
);
}