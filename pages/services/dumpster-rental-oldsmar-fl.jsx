import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalOldsmar() {
  return <CityDumpsterPage data={getCity("oldsmar-fl")} />;
}
