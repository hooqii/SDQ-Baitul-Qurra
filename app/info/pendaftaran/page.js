import React from "react";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const whatsapp = [
  {
    nama: "Nuzul Fazmi, S.Stat",
    description: "0852 6095 7197",
    href: "https://wa.me/+6285260957197/",
    icon: FaWhatsapp,
  },
  {
    nama: "Hesti Raimona, A.Md",
    description: "0822 2908 1121",
    href: "https://wa.me/+6282229081121/",
    icon: FaWhatsapp,
  },
];

export default function HotTopic() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="flex flex-wrap justify-center lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <Image
            className="inset-0 justify-center w-96 lg:w-full rounded-xl max-w-3xl bg-gray-50 object-cover"
            height={5000}
            width={5000}
            src={"/belajar.png"}
            alt=""
          />
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-2 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pendaftaran Tahun Pembelajaran 2024/2025
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Pada saat mendaftar calon peserta didik menyerahkan{" "}
              <strong>persyaratan </strong>
              yang diperlukan, meliputi:
            </p>
            <div className="mt-6 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <ol>
                <li>- Biaya Formulir pendaftaran Rp. 25.000</li>
                <li>- Mengisi Formulir Pendaftaran</li>
                <li>- Fotocopy Akta Kelahiran dan Kartu Keluarga (KK)</li>
                <li>- Fotocopy KTP Orang Tua sebanyak 1 lembar</li>
                <li>- Pas Foto 3 x 4 sebanyak 4 Lembar</li>
                <li>- Fotocopy BPJS Peserta didik sebanyak 1 lembar</li>
              </ol>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                JADWAL PENDAFTARAN
              </h2>
              <p className="mt-6">
                • Gelombang I 08 - 27 Januari 2024 <br /> • Gelombang II 12 - 24
                Februari 2024
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                JADWAL SELEKSI
              </h2>
              <p className="mt-6">
                • Gelombang I 29 Januari - 01 Februari 2024 <br /> • Gelombang
                II 26 - 29 Februari 2024
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                BIAYA PENDAFTARAN
              </h2>
              <p className="mt-6">
                • Biaya Pendaftaran : Rp. 25.000 <br /> • SPP Bulanan dan
                Kegiatan : Rp. 330.000 <br />• Infaq Pendidikan Awal : Rp.
                2.700.000 (Tidak Termasuk Biaya Seragam)
              </p>
            </div>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              KONTAK PENDAFTARAN
            </h2>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {whatsapp.map((whatsapp) => (
                  <div key={whatsapp.nama} className="flex flex-col">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                        <whatsapp.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {whatsapp.nama}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 overflow-auto">
                      <p className="flex-auto">{whatsapp.description}</p>
                      <p className="mt-3">
                        <a
                          href={whatsapp.href}
                          className="text-sm font-semibold leading-6 text-blue-600"
                        >
                          <span>Hubungi Whatsapp</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
