import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalTrinity() {
  return <CityDumpsterPage data={getCity("trinity-fl")} />;
}
