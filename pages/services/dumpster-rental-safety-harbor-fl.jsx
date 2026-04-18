import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalSafetyHarbor() {
  return <CityDumpsterPage data={getCity("safety-harbor-fl")} />;
}
