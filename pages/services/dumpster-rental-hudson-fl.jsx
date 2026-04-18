import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalHudson() {
  return <CityDumpsterPage data={getCity("hudson-fl")} />;
}
