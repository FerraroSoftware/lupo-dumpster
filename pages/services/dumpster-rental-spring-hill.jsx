import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalSpringHill() {
  return <CityDumpsterPage data={getCity("spring-hill")} />;
}
