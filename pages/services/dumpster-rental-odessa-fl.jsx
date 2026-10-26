import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/odessa-fl";

export default function DumpsterRentalOdessa() {
  return <CityPage city={getCity("odessa-fl")} content={content} />;
}
