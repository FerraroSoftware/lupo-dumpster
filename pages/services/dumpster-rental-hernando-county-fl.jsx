import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalHernandoCounty() {
  return <CityDumpsterPage data={getCity("hernando-county-fl")} />;
}
