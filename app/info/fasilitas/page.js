import React from "react";
import Image from "next/image";
import {
  GlobeAsiaAustraliaIcon,
  GlobeAmericasIcon,
  CloudArrowUpIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import {
  FaQuran,
  FaBaseballBall,
  FaBook,
  FaMosque,
  FaSwimmer,
  FaToilet,
} from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { GiHealthNormal } from "react-icons/gi";

const features = [
  {
    name: "Fasilitas Belajar.",
    description:
      "Fasilitas yang mendukung para murid menghafal Alqur'an dengan linkungan yang nyaman dan bersih",
    icon: GlobeAsiaAustraliaIcon,
  },
  {
    name: "Fasilitas Bermain.",
    description:
      "Fasilitas luar ruangan yang nyaman agar muird dapat bermain guna mengembangkan kreativitas anak",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Fasilitas Olahraga.",
    description:
      "Fasilitas untuk kegiatan olahraga guna mendukung kesehatan dan kebugaran jasmani para murid",
    icon: GlobeAsiaAustraliaIcon,
  },
];

const economicSectorFeatures = [
  {
    name: "Ruang Belajar yang Nyaman:",
    description:
      "SDQ Baitul Qurra menawarkan ruang belajar yang nyaman dan didesain secara ergonomis, menciptakan atmosfer kondusif untuk pembelajaran optimal. Setiap ruang dilengkapi dengan fasilitas modern dan pencahayaan alami untuk meningkatkan kenyamanan siswa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Perpustakaan Mini:",
    description:
      "Perpustakaan mini kami merupakan tempat yang menyenangkan untuk eksplorasi ilmu dan membaca. Dengan koleksi buku yang beragam, siswa dapat mengembangkan minat literasi mereka di lingkungan yang tenang dan terinspirasi.",
    icon: FaBook,
  },
  {
    name: "Toilet dan Tempat Wudhu:",
    description:
      "Fasilitas toilet dan tempat wudhu di SDQ Baitul Qurra dirancang dengan standar kebersihan tinggi, menciptakan lingkungan yang menyenangkan dan mendukung kebersihan ritus ibadah harian.",
    icon: FaToilet,
  },
  {
    name: "Kolam Renang:",
    description:
      "Kolam renang di sekolah kami memberikan kesempatan bagi siswa untuk menjalani kegiatan olahraga yang menyenangkan dan sehat. Ini juga merupakan tempat untuk mengembangkan keterampilan renang dan gaya hidup aktif.",
    icon: FaSwimmer,
  },
  {
    name: "Unit Kesehatan Sekolah (UKS):",
    description:
      "Unit Kesehatan Sekolah kami didedikasikan untuk memastikan kesejahteraan siswa. Dengan perawat yang berpengalaman, kami menyediakan layanan kesehatan dasar dan memberikan edukasi tentang gaya hidup sehat.",
    icon: GiHealthNormal,
  },
  {
    name: "Zona Aktivitas:",
    description:
      "Zona aktivitas kami menyediakan ruang bagi siswa untuk berpartisipasi dalam kegiatan ekstrakurikuler dan pengembangan diri. Ini mencakup berbagai kegiatan mulai dari seni dan kerajinan hingga klub dan komunitas siswa.",
    icon: ServerIcon,
  },
  {
    name: "Balai/Pondok Qur'an:",
    description:
      "Balai/Pondok Qur'an di SDQ Baitul Qurra merupakan tempat khusus untuk pembelajaran dan pengembangan tahfidz Al-Qur'an. Fasilitas ini menciptakan lingkungan yang mendukung siswa dalam mencapai target hafalan mereka.",
    icon: FaQuran,
  },
  {
    name: "Lapangan Olahraga:",
    description:
      "Lapangan olahraga kami dirancang untuk memfasilitasi kegiatan olahraga berbagai jenis. Ini mencakup area untuk sepak bola, bola basket, dan kegiatan fisik lainnya, mendukung pengembangan keterampilan motorik dan tim.",
    icon: FaBaseballBall,
  },
  {
    name: "Mushalla:",
    description:
      "Mushalla di SDQ Baitul Qurra adalah tempat untuk menjalankan ibadah dengan khusyuk. Dengan desain yang tenang dan damai, mushalla menyediakan ruang untuk siswa dan staf melaksanakan shalat secara teratur.",
    icon: FaMosque,
  },
  {
    name: "Laboratorium Sains:",
    description:
      "Laboratorium sains kami dilengkapi dengan peralatan mutakhir untuk mendukung pembelajaran praktis dan eksperimen ilmiah. Ini adalah tempat di mana siswa dapat menggali lebih dalam konsep-konsep sains melalui percobaan dan pengamatan langsung.",
    icon: ImLab,
  },
];

export default function Economia() {
  return (
    <div className="py-24 lg:pt-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            SDQ Baitul Qurra&apos; Abdya
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Fasilitas
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Sekolah Dasar Qurra&apos; Abdya (SDQ Baitul Qurra) menempatkan fokus
            pada menciptakan lingkungan pendidikan yang optimal. Berikut adalah
            fasilitas dan infrastruktur pendukung di SDQ Baitul Qurra:
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src={"/guru-murid-1.png"}
            alt="Image"
            className="mb-[-5%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width={2432}
            height={1500}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto lg:mt-20 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8 mb-10">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-blue-600"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="flex mt-14 items-start justify-center gap-6 flex-wrap mx-10">
        <div className="flex flex-col gap-5 lg:gap-10 items-start mt-5 justify-start">
          <Image
            src={"/fasilitas-sains.png"}
            alt="Image"
            className="flex lg:max-w-2xl rounded-xl shadow-xl ring-1 ring-gray-400/10"
            width={2432}
            height={1442}
          />
          <Image
            src={"/fasilitas-kolam-renang.jpeg"}
            alt="Image"
            className="flex lg:max-w-2xl rounded-xl shadow-xl ring-1 ring-gray-400/10"
            width={2432}
            height={1442}
          />
          <Image
            src={"/labolatorium-sains.png"}
            alt="Image"
            className="flex lg:max-w-2xl rounded-xl shadow-xl ring-1 ring-gray-400/10"
            width={2432}
            height={1442}
          />
        </div>
        <div className="">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-xl">
              <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Infrastruktur dan Fasilitas Pendukung di SDQ Baitul Qurra:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {economicSectorFeatures.map((ecoFeature) => (
                  <div key={ecoFeature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <ecoFeature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-blue-600"
                        aria-hidden="true"
                      />
                      {ecoFeature.name}
                    </dt>{" "}
                    <dd className="inline">{ecoFeature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
