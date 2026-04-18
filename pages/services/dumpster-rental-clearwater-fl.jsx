import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalClearwater() {
  return <CityDumpsterPage data={getCity("clearwater-fl")} />;
}
