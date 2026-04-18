import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalSeminole() {
  return <CityDumpsterPage data={getCity("seminole-fl")} />;
}
