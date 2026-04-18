import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalWesleyChapel() {
  return <CityDumpsterPage data={getCity("wesley-chapel-fl")} />;
}
