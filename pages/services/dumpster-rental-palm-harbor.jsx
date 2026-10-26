import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/palm-harbor";

export default function DumpsterRentalPalmHarbor() {
  return <CityPage city={getCity("palm-harbor")} content={content} />;
}
