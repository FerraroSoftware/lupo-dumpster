import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/st-petersburg-fl";

export default function DumpsterRentalStPetersburg() {
  return <CityPage city={getCity("st-petersburg-fl")} content={content} />;
}
