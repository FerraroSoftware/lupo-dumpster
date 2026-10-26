import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/largo-fl";

export default function DumpsterRentalLargo() {
  return <CityPage city={getCity("largo-fl")} content={content} />;
}
