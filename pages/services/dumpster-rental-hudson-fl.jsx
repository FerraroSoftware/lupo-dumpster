import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/hudson-fl";

export default function DumpsterRentalHudson() {
  return <CityPage city={getCity("hudson-fl")} content={content} />;
}
