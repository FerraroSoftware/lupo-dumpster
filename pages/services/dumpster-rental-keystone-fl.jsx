import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalKeystone() {
  return <CityDumpsterPage data={getCity("keystone-fl")} />;
}
