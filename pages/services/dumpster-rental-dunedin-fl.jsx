import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalDunedin() {
  return <CityDumpsterPage data={getCity("dunedin-fl")} />;
}
