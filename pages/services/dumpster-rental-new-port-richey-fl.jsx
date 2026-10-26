import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/new-port-richey-fl";

export default function DumpsterRentalNewPortRichey() {
  return <CityPage city={getCity("new-port-richey-fl")} content={content} />;
}
