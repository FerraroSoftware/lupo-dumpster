import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/hillsborough-county-fl";

export default function DumpsterRentalHillsboroughCounty() {
  return <CityPage city={getCity("hillsborough-county-fl")} content={content} />;
}
