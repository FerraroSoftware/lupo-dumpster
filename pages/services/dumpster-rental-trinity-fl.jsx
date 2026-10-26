import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/trinity-fl";

export default function DumpsterRentalTrinity() {
  return <CityPage city={getCity("trinity-fl")} content={content} />;
}
