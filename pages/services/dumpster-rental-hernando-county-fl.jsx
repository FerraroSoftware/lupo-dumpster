import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/hernando-county-fl";

export default function DumpsterRentalHernandoCounty() {
  return <CityPage city={getCity("hernando-county-fl")} content={content} />;
}
