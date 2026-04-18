import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalLutz() {
  return <CityDumpsterPage data={getCity("lutz-fl")} />;
}
