import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/tampa-bay";

export default function DumpsterRentalTampaBay() {
  return <CityPage city={getCity("tampa-bay")} content={content} />;
}
