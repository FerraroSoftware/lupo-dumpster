import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/lutz-fl";

export default function DumpsterRentalLutz() {
  return <CityPage city={getCity("lutz-fl")} content={content} />;
}
