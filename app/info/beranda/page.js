import React from "react";
import Image from "next/image";
import {
  MapIcon,
  MapPinIcon,
  UserIcon,
  FlagIcon,
  LanguageIcon,
  LightBulbIcon,
} from "@heroicons/react/20/solid";
import { FaUserFriends } from "react-icons/fa";
export default function General() {
  return (
    <div className="relative isolate overflow-hidden px-6  sm:py-32 lg:overflow-visible lg:pt-12">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-green-950">
                Tentang Sekolah
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                SDQ Baitul Qurra' Abdya
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Mendidik para penghafal Al-Qur'an dan Hadis, berpikir logis,
                beradab dan beradat, serta memiliki jiwa kepemimpinan yang
                berlandaskan kepada Al-Quran dan Sunnah.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            width={500}
            height={500}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/bg-school.jpg"
            alt=""
          />
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:mt-56 lg:overflow-hidden">
          <Image
            width={500}
            height={500}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/bg-murid-guru.jpeg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <MapPinIcon
                    className="mt-1 h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Detail Lokasi.
                    </strong>{" "}
                    KOMPLEK SIGUPAI JLN. TEUKU ALIAN , Geulumpang Payong, Kec.
                    Blangpidie, Kab. Aceh Barat Daya Prov. Aceh
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <UserIcon
                    className="mt-1 h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Jumlah Pengajar.{" "}
                    </strong>{" "}
                    Sekitar 24 Guru (2024 est.)
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaUserFriends
                    className="mt-1 h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Jumlah Siswa.{" "}
                    </strong>{" "}
                    1,414 (as of 2024)
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MapIcon
                    className="mt-1 h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Kota.
                    </strong>{" "}
                    Blang Pidie, Abdya
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LanguageIcon
                    className="mt-1 h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Language.{" "}
                    </strong>{" "}
                    Indonesia
                  </span>
                </li>
              </ul>
              <h4 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Visi & Misi
              </h4>
              <p className="mt-8">
                Melahirkan generasi umat yang mampu menghafal Al-Qur'an, berilmu
                berakhlak mulia dan berjiwa leadership. <br /> <br />
                1. Menyelenggarakan kegiatan yang berlandaskan Al-Qur'an dan
                Sunnah. <br /> 2. Menyelenggarakan kegiatan peningkatan
                kemampuan Bahasa Arab bagi murid. <br /> 3. Menyelenggarakan
                kegiatan yang mengarah pada pembentukan karakter sesuai tuntunan
                islam dan adat istiadat masyarakat Aceh. <br /> 4.
                Menyelenggarakan kegiatan yang mengarah pada pendalaman
                penalaran yang bersifat saintific. <br /> 5. Menyelenggarakan
                program leadership sesuai dengan kebutuhan umat.
              </p>
              <div className="mt-8 lg:sticky">
                <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Simbol Yayasan Pendidikan Terpadu Qur'an Baitul Qurra' Abdya
                </h3>
                <ul className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3 ">
                    <Image
                      height={500}
                      width={500}
                      src={"/img-logo.png"}
                      alt="Logo yptq Baitul Qurra'"
                      className={"w-50 h-25"}
                    />
                  </li>
                  <li className="flex gap-x-3">
                    <FlagIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Shield/Coat of Arms.
                      </strong>{" "}
                      The national emblem of Greece features a blue escutcheon
                      with a white cross surrounded by two laurel branches.
                    </span>
                  </li>
                  <li className="flex gap-x-3 ">
                    <Image
                      height={485}
                      width={485}
                      src={"/img-logo-sdq.png"}
                      alt="Cherry Blossom"
                      className={"w-50 ml-5 h-25"}
                    />
                  </li>
                  <li className="flex gap-x-3">
                    <LightBulbIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Acropolis.
                      </strong>{" "}
                      An ancient citadel located on a rocky outcrop above the
                      city of Athens, containing the remains of several ancient
                      buildings of great historical significance, the most
                      famous being the Parthenon.
                    </span>
                  </li>
                  <li className="flex gap-x-3 ">
                    <div className="w-90 h-40 relative overflow-visible">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/JylxebGPhc8"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#055EB1] to-[#FFF9F9] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
