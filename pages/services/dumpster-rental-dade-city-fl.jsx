import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/dade-city-fl";

export default function DumpsterRentalDadeCity() {
  return <CityPage city={getCity("dade-city-fl")} content={content} />;
}
