import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";

const timeline = [
  {
    name: "Pemahaman Awal:",
    description:
      "Pengenalan mendalam mengenai tahfidz Al-Qur'an, metode pembelajaran (Tibyan, Ziyadah, dan Talaggi), dan kebijaksanaan ilmiah yang terkandung dalam Al-Qur'an.",
    date: "",
    dateTime: "2021-08",
  },
  {
    name: "Tahfidz Al-Qur'an",
    description:
      "Mulai dengan menetapkan target hafalan Al-Qur'an 6 Juz dengan metode pembelajaran Tibyan, Ziyadah, dan Talaggi untuk meningkatkan efektivitas tahfidz. Integrasikan pembelajaran bahasa Arab untuk memfasilitasi pemahaman Al-Qur'an dan komunikasi internasional.",
    date: "",
    dateTime: "2022-02",
  },
  {
    name: "Sains Qur'an",
    description:
      "Menyertakan modul ilmu pengetahuan alam berdasarkan Al-Qur'an. Fasilitasi eksperimen dan proyek yang memadukan prinsip-prinsip Al-Qur'an dalam pembelajaran sains.",
    date: "",
    dateTime: "2022-12",
  },
  {
    name: "Leadership dan Ilmu Adab:",
    description:
      "Menerapkan pembelajaran aktif untuk membentuk karakter kepemimpinan dengan penekanan pada nilai-nilai Islami. Mengenalkan nilai-nilai adab Islami dalam kehidupan sehari-hari.",
    date: "",
    dateTime: "2022-12",
  },
];

export default function Business() {
  return (
    <div className="lg:pt-1 sm:py-32">
      <div className="relative isolate overflow-hidden px-6 py-6 lg:pt-12 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-blue-600">
                  Program Unggulan
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Tahfidz dan Pendidikan Holistik di SDQ Baitul Qurra
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Program Unggulan SDQ Baitul Qurra dirancang untuk memberikan
                  pengalaman pendidikan holistik dan fokus pada tahfidz
                  Al-Qur&apos;an. Berikut adalah deskripsi singkat tentang
                  program unggulan kami:
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              className="w-[35rem] md:w-[45rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 lg:w-[52rem]"
              src={"/images-2.jpg"}
              height={505}
              width={1013}
              alt=""
            />
            <Image
              className="w-[35rem] md:w-[45rem] max-w-none rounded-xl mt-2 bg-gray-900 shadow-xl ring-1 ring-gray-400/10 lg:w-[52rem]"
              src={"/guru-murid-2.jpeg"}
              height={505}
              width={1013}
              alt=""
            />
            <Image
              className="w-[35rem] md:w-[45rem] max-w-none rounded-xl mt-2 bg-gray-900 shadow-xl ring-1 ring-gray-400/10 lg:w-[52rem]"
              src={"/images-4.jpg"}
              height={505}
              width={1013}
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <StarIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Tahfidz Target Hafalan SDQ Baitul Qurra 6 Juz
                      </strong>{" "}
                      <br />
                      Program ini menekankan pada hafalan Al-Qur&apos;an dengan
                      target 6 Juz bagi siswa SDQ Baitul Qurra, menciptakan
                      lingkungan yang mendukung pengembangan kemampuan tahfidz
                      mereka.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <StarIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Tahfidz dengan Metode Tibyan, Ziyadah, dan Talaggi
                      </strong>{" "}
                      <br />
                      Menggunakan metode pembelajaran yang teruji seperti
                      Tibyan, Ziyadah, dan Talaggi untuk memastikan efektivitas
                      dalam mengajar dan memahamkan siswa terhadap ayat-ayat
                      Al-Qur&apos;an.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <StarIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Bahasa Internasional menggunakan Bahasa Arab
                      </strong>{" "}
                      <br />
                      Memberikan penguasaan bahasa Arab sebagai kunci pemahaman
                      Al-Qur&apos;an, sementara tetap memfasilitasi pengembangan
                      kemampuan berkomunikasi dalam skala internasional.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <StarIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Sains Qur&apos;an (Ilmu Pengetahuan Alam berdasarkan
                        Al-Qur&apos;an)
                      </strong>{" "}
                      <br />
                      Menyelaraskan pendidikan sains dengan prinsip-prinsip
                      Al-Qur&apos;an, menggali kebijaksanaan ilmiah yang
                      terkandung dalam ayat-ayat suci.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <StarIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Leadership (Ilmu Kepemimpinan)
                      </strong>{" "}
                      <br />
                      Membentuk karakter kepemimpinan melalui pembelajaran
                      aktif, memberikan penekanan pada nilai-nilai islami dan
                      etika kepemimpinan yang dicontohkan dalam Al-Qur&apos;an.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <StarIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Ilmu Adab Sehari-hari
                      </strong>{" "}
                      <br />
                      Memperkenalkan dan mendalami nilai-nilai adab Islami dalam
                      kehidupan sehari-hari, menciptakan lingkungan belajar yang
                      santun dan bermartabat.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <StarIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Jalsah Tarbiyatul Walidain (Parenting Day)
                      </strong>{" "}
                      <br />
                      Menyelenggarakan acara khusus untuk memperkuat peran orang
                      tua sebagai pendidik, dengan program Tahsin Al-Qur&apos;an
                      orang tua hebat dan Kajian Orang Tua Hebat.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <StarIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Fullday School:
                      </strong>{" "}
                      <br />
                      Menyediakan pendidikan sepanjang hari dengan kurikulum
                      yang komprehensif, mencakup aspek akademis dan
                      pengembangan karakter secara holistik.
                    </span>
                  </li>
                </ul>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Proses program belajar yang efektif
                </h2>
                <p className="mt-6">
                  Berikut adalah proses pembelajaran yang efektif untuk Program Unggulan di SDQ
                  Baitul Qurra dengan mengintegrasikan prinsip-prinsip
                  pendidikan holistik dan fokus pada tahfidz Al-Qur&apos;an.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:pt-2">
        <h2 className="text-base font-semibold leading-7 text-blue-600">
          Proses
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Program belajar
        </p>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4 pt-12">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-blue-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-2xl text-center lg:pt-24">
        <p className="text-base font-semibold leading-7 text-blue-600">YPTQ</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          SDQ Baitul Qurra&apos; Abdya
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Here are some tips to help you close the deal.
        </p>
      </div>
    </div>
  );
}
