import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalDadeCity() {
  return <CityDumpsterPage data={getCity("dade-city-fl")} />;
}
