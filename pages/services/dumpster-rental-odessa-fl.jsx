import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalOdessa() {
  return <CityDumpsterPage data={getCity("odessa-fl")} />;
}
