import CityDumpsterPage from "@/components/new/city-dumpster-page";
import { getCity } from "@/lib/cities";

export default function DumpsterRentalPalmHarbor() {
  return <CityDumpsterPage data={getCity("palm-harbor")} />;
}
