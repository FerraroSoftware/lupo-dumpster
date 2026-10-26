import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/keystone-fl";

export default function DumpsterRentalKeystone() {
  return <CityPage city={getCity("keystone-fl")} content={content} />;
}
