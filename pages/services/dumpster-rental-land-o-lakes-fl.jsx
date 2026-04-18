import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalLandOLakes() {
  return <CityDumpsterPage data={getCity("land-o-lakes-fl")} />;
}
