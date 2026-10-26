import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/san-antonio-fl";

export default function DumpsterRentalSanAntonio() {
  return <CityPage city={getCity("san-antonio-fl")} content={content} />;
}
