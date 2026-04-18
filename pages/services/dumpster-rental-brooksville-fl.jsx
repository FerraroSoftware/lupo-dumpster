import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalBrooksville() {
  return <CityDumpsterPage data={getCity("brooksville-fl")} />;
}
