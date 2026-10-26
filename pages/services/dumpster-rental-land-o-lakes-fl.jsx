import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/land-o-lakes-fl";

export default function DumpsterRentalLandOLakes() {
  return <CityPage city={getCity("land-o-lakes-fl")} content={content} />;
}
