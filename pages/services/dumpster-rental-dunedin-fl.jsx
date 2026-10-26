import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/dunedin-fl";

export default function DumpsterRentalDunedin() {
  return <CityPage city={getCity("dunedin-fl")} content={content} />;
}
