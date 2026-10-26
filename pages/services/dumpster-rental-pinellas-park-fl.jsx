import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/pinellas-park-fl";

export default function DumpsterRentalPinellasPark() {
  return <CityPage city={getCity("pinellas-park-fl")} content={content} />;
}
