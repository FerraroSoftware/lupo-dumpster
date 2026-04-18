import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalTampaBay() {
  return <CityDumpsterPage data={getCity("tampa-bay")} />;
}
