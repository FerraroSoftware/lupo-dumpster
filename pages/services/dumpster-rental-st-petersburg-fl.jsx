import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalStPetersburg() {
  return <CityDumpsterPage data={getCity("st-petersburg-fl")} />;
}
