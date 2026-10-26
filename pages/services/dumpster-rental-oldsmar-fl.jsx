import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/oldsmar-fl";

export default function DumpsterRentalOldsmar() {
  return <CityPage city={getCity("oldsmar-fl")} content={content} />;
}
