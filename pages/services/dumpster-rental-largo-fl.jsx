import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalLargo() {
  return <CityDumpsterPage data={getCity("largo-fl")} />;
}
