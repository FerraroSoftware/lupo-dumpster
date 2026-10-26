import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/clearwater-fl";

export default function DumpsterRentalClearwater() {
  return <CityPage city={getCity("clearwater-fl")} content={content} />;
}
