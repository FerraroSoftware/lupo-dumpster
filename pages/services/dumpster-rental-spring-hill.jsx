import CityPage from "@/components/site/city-page";
import { getCity } from "@/lib/cities";
import content from "@/content/cities/spring-hill";

export default function DumpsterRentalSpringHill() {
  return <CityPage city={getCity("spring-hill")} content={content} />;
}
