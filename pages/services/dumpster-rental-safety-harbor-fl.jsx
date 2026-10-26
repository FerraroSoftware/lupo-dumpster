import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/safety-harbor-fl";

export default function DumpsterRentalSafetyHarbor() {
  return <CityPage city={getCity("safety-harbor-fl")} content={content} />;
}
