import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/brooksville-fl";

export default function DumpsterRentalBrooksville() {
  return <CityPage city={getCity("brooksville-fl")} content={content} />;
}
