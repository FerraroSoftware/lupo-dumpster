import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/holiday-fl";

export default function DumpsterRentalHoliday() {
  return <CityPage city={getCity("holiday-fl")} content={content} />;
}
