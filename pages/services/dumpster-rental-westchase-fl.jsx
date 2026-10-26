import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/westchase-fl";

export default function DumpsterRentalWestchase() {
  return <CityPage city={getCity("westchase-fl")} content={content} />;
}
