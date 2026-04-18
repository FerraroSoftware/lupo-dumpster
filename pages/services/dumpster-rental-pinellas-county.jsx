import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalPinellasCounty() {
  return <CityDumpsterPage data={getCity("pinellas-county")} />;
}
