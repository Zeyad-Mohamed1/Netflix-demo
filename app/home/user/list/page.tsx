import MovieCard from "@/app/components/MovieCard";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import Image from "next/image";
async function getWatchList(userId: string) {
  const data = await prisma.watchList.findMany({
    where: {
      userId,
    },
    select: {
      Movie: {
        select: {
          title: true,
          age: true,
          duration: true,
          imageString: true,
          overview: true,
          release: true,
          id: true,
          WatchLists: true,
          youtubeString: true,
        },
      },
    },
  });
  return data;
}

const WatchList = async () => {
  const session = await getServerSession(authOptions);
  const movies = await getWatchList(session?.user?.email as string);
  return (
    <>
      <h1 className="text-4xl text-white font-bold underline mt-10 px-5 sm:px-0">
        Your WatchList
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
        {movies.map((movie) => (
          <div key={movie.Movie?.id} className="relative h-48">
            <Image
              src={movie.Movie?.imageString as string}
              alt={movie.Movie?.title as string}
              width={500}
              height={400}
              className="w-full h-full absolute rounded-sm object-cover"
            />

            <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
              <div className="border bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
                <Image
                  src={movie.Movie?.imageString as string}
                  alt={movie.Movie?.title as string}
                  width={800}
                  height={800}
                  className="w-full h-full absolute rounded-sm object-cover -z-10"
                />
                <MovieCard
                  movieId={movie?.Movie?.id as number}
                  overview={movie?.Movie?.overview as string}
                  title={movie?.Movie?.title as string}
                  watchListId={movie?.Movie?.WatchLists[0]?.id as string}
                  watchList={
                    (movie.Movie?.WatchLists?.length as number) > 0
                      ? true
                      : (false as boolean)
                  }
                  youtubeUrl={movie?.Movie?.youtubeString as string}
                  key={movie.Movie?.id as number}
                  age={movie?.Movie?.age as number}
                  time={movie?.Movie?.duration as number}
                  year={movie?.Movie?.release}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WatchList;
