import imgCentrifugalCompressor from "@/assets/projects/centrifugal compressors.png";
import imgCentrifugalAirCompressor from "@/assets/projects/CENTRIFUGAL-AIR-COMPRESSORS.webp";
import imgProject5 from "@/assets/projects/project 5-2.jpg";
import imgProject6 from "@/assets/projects/project 6.jpg";
import imgProject7 from "@/assets/projects/project 7.png";
import imgProject9 from "@/assets/projects/project 9.jpg";
import imgProject12 from "@/assets/projects/project 12.webp";
import imgProject13 from "@/assets/projects/project 13.webp";
import imgProject16 from "@/assets/projects/project 16.webp";
import pipe from "@/assets/projects/pipe-fittings.png";
import diaphragm from "@/assets/projects/diaphragm.jpg";
import atlas from "@/assets/projects/Atlas-img.jpg"


export type ProjectItem = {
  n: string;
  title: string;
  client: string;
  year: string;
  description: string;
  img: string;
  scope?: string;
};

export const projects: ProjectItem[] = [
  {
    n: "PR/01",
    title: "Centrifugal Gas Compressor",
    scope: "Oil & Gas",
    client: "Southwest Institute of Chemical Co., Ltd.",
    year: "2025",
    img: imgCentrifugalCompressor,
    description: "CO2 Centrifugal Compressor Unit, 7898 Nm3/hr, 3.8 MPa(G)",
  },
  {
    n: "PR/02",
    title: "Centrifugal Air Compressor",
    scope: "Oil & Gas",
    client: "Lihuayi Weiyuan Chemical Co., Ltd.",
    year: "2025",
    img: imgCentrifugalAirCompressor,
    description: "Air Centrifugal Compressor Unit, 86000 Nm3/hr, 0.85 MPa(A)",
  },
  {
    n: "PR/03",
    title: "Separators and KOD, Air Receiver ",
    client: "NOC",
    year: "2024",
    img: imgProject5,
    description: "McDermott & HHI & L&T Ruya. L&T Platform 12: Separator and KOD,Air Receiver.",
  },
  {
    n: "PR/04",
    title: "Oil Separator Skid",
    client: "Shell",
    year: "2024",
    img: imgProject6,
    description: "PWT Vessel & skid, Oil Separator",
  },
  {
    n: "PR/05",
    title: "TEG Vessel, Heat Exchanger, Skid",
    client: "ExxonMobil",
    year: "2024",
    img: imgProject7,
    description:
      "TEG Vessels, TEG heat exchanger, TEG skid, PWT vessels, Gas Scrubber, Oil Separator, Oil Internals, S&T HEX, Misc Vessels, Chemical Distribution Skid",
  },
  {
    n: "PR/06",
    title: "Gate, Globe & Check Valves",
    client: "ADNOC HEAT RECOVERY PJT (WHRP)",
    year: "2022",
    img: imgProject9,
    description: "Gate Valves, Globe Valves, Check Valves",
  },
  {
    n: "PR/07",
    title: "Needle Valves",
    client: "ADNOC BAB & BUHASA",
    year: "2025",
    img: imgProject12,
    description: "Globe (Needle) Valves",
  },
  {
    n: "PR/08",
    title: "Ball Valves API 6D upto 12\"",
    client: "KR Industry, Korea",
    year: "2024",
    img: imgProject13,
    description: "Ball Valves - API 6D - Up to 12\"",
  },
  {
    n: "PR/09",
    title: "Gaskets",
    client: "Doosan Enerbility Co., Ltd.",
    year: "2025",
    img: imgProject16,
    description: "No-Absestos, Insulation Kit, SWG Gaskets",
  },
  {
    n: "PR/10",
    title: "Altas Copco Compressor",
    client: "ADNOC ONSHORE/UAE.",
    year: "2025",
    img: atlas,
    description: "Atlas Copco Compressor ATEX approved.",
  },
  {
    n: "PR/11",
    title: "Pipes & Fittings & Flanges",
    client: "Fertiglobe – UAE",
    year: "2026",
    img: pipe,
    description: "Pipes, Fittings and Flanges ",
  },
  {
    n: "PR/12",
    title: "Diaphragm pump",
    client: "MICODA – UAE.",
    year: "2025",
    img: diaphragm,
    description: "Diaphragm pumps ",
  },

];
