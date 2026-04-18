import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalHillsboroughCounty() {
  return <CityDumpsterPage data={getCity("hillsborough-county-fl")} />;
}
