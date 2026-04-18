import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalHoliday() {
  return <CityDumpsterPage data={getCity("holiday-fl")} />;
}
