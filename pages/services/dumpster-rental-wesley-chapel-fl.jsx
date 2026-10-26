import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/wesley-chapel-fl";

export default function DumpsterRentalWesleyChapel() {
  return <CityPage city={getCity("wesley-chapel-fl")} content={content} />;
}
