import { animePromise } from "@/lib/promises";
import { episodeSlug } from "@/lib/utils";
import Link from "next/link";

export default async function SeriesPage({
  params,
}: {
  params: { series: string };
}) {
  const data = await animePromise.animeInfo(params.series)
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        <div>{data.title}</div>
        <div>{data.description}</div>
        <div>Episodes</div>
        <ul>
          {data.episodes.map((episode) => {
            return (
              <li key={episode.id}>
                <Link href={`/anime/${params.series}/${episodeSlug(episode.number)}`}>
                  Episode {episode.number}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
