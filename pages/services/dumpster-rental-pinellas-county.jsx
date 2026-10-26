import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/pinellas-county";

export default function DumpsterRentalPinellasCounty() {
  return <CityPage city={getCity("pinellas-county")} content={content} />;
}
