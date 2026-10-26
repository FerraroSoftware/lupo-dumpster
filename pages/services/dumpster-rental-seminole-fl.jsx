import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/seminole-fl";

export default function DumpsterRentalSeminole() {
  return <CityPage city={getCity("seminole-fl")} content={content} />;
}
