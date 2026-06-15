import type { ClientPageItem } from "./types";

import omanDrydockLogo from "@/assets/clients/OMAN-300x180.jpeg";
import adacLogo from "@/assets/clients/abudhabi_airport_logo.png";
import arlLogo from "@/assets/clients/ARL.png";
import borougeLogo from "@/assets/clients/borouge.jfif";
import enecLogo from "@/assets/clients/emirates_logo.png";
import kizadLogo from "@/assets/clients/kizad.png";
import orientLogo from "@/assets/clients/orient.jfif";
import parcoLogo from "@/assets/clients/PARCO.png";
import taqaLogo from "@/assets/clients/taqa.png";
import socar from "@/assets/clients/SOCAR.avif"

const allClientLogoModules = import.meta.glob("../../assets/clients/logo_*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const clientLogoBySlug = Object.fromEntries(
  Object.entries(allClientLogoModules).map(([path, src]) => {
    const fileName = path.split("/").pop() ?? "";
    const slug = fileName.replace(/^logo_/, "").replace(/\.[^.]+$/, "").toLowerCase();
    return [slug, src];
  }),
) as Record<string, string>;

const getClientLogo = (slug: string): string | undefined => clientLogoBySlug[slug.toLowerCase()];

export const clientPageData: ClientPageItem[] = [
  {
    name: "ADNOC Group of Companies - UAE",
    logo: getClientLogo("adnoc"),
    sector: "Oil & Gas",
    project: "Supply of valves, flanges and instrumentation packages for upstream operations.",
  },
  {
    name: "TAQA - Abu Dhabi Water and Electricity Authority - UAE",
    logo: taqaLogo,
    sector: "Power & Water",
    project: "Electrical, controls and utility supply support for strategic generation and distribution projects.",
  },
  {
    name: "ADAC - Abu Dhabi Airport company - UAE",
    logo: adacLogo,
    sector: "Aviation",
    project: "Supply support for airport infrastructure, operations and utility systems.",
  },
  {
    name: "ADSB - Abu Dhabi Ship building - UAE",
    logo: getClientLogo("adsb"),
    sector: "Marine & Shipbuilding",
    project: "Marine-grade equipment packages and systems support for shipbuilding programs.",
  },
  {
    name: "KIZAD PORT - UAE",
    logo: kizadLogo,
    sector: "Ports & Logistics",
    project: "Port infrastructure equipment and mechanical systems supply for terminal operations.",
  },
  {
    name: "Emirates Steel - UAE",
    logo: getClientLogo("emiratessteel"),
    sector: "Steel & Manufacturing",
    project: "Industrial process, utilities and plant support equipment supply.",
  },
  {
    name: "DEWA - Dubai Electricity and Water authority - UAE",
    logo: getClientLogo("dewa"),
    sector: "Power & Water",
    project: "Switchgear, transformers and control systems for utility infrastructure.",
  },
  {
    name: "ENEC - Emirates Nuclear Energy Company - UAE",
    logo: enecLogo,
    sector: "Nuclear Energy",
    project: "Critical industrial supply support for nuclear energy infrastructure projects.",
  },
  {
    name: "Borouge - UAE",
    logo: borougeLogo,
    sector: "Petrochemical",
    project: "Process equipment and treatment chemicals for polyolefin manufacturing facilities.",
  },
  {
    name: "Fertiglobe - UAE",
    logo: getClientLogo("fertiglobe"),
    sector: "Fertilizers",
    project: "Process valves, pumps and chemicals for ammonia and urea production.",
  },
  {
    name: "Omand DryDock - Oman",
    logo: omanDrydockLogo,
    sector: "Ship Repair",
    project: "Marine spares, valves and treatment chemicals for VLCC servicing.",
  },
  {
    name: "PARCo - Pak Arab Refinery - Pakistan",
    logo: parcoLogo,
    sector: "Refining",
    project: "Mechanical, process and utility supply support for refinery operations.",
  },
  {
    name: "ARL - Attack Refinery Limited - Pakistan",
    logo: arlLogo,
    sector: "Refining",
    project: "Supply support for process units, rotating equipment and maintenance programs.",
  },
  {
    name: "Orient Petroleum Limited - Pakistan",
    logo: orientLogo,
    sector: "Oil & Gas",
    project: "Industrial equipment and project supply support for upstream and downstream operations.",
  },
  {
    name: "State Oil Company of the Azerbaijan Republic",
    logo: socar,
    sector: "Oil & Gas",
    project: "Industrial equipment and project supply support for upstream and downstream operations.",
  },
];

export const allClientLogos = clientPageData
  .filter((client) => Boolean(client.logo))
  .map((client) => ({ src: client.logo as string, label: client.name }));
