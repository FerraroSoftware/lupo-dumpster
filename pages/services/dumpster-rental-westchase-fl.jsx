import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalWestchase() {
  return <CityDumpsterPage data={getCity("westchase-fl")} />;
}
