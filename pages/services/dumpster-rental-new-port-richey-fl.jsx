import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalNewPortRichey() {
  return <CityDumpsterPage data={getCity("new-port-richey-fl")} />;
}
