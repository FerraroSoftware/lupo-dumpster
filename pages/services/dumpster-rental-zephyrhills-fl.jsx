import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/zephyrhills-fl";

export default function DumpsterRentalZephyrhills() {
  return <CityPage city={getCity("zephyrhills-fl")} content={content} />;
}
