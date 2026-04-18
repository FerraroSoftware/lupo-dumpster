import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalPinellasPark() {
  return <CityDumpsterPage data={getCity("pinellas-park-fl")} />;
}
