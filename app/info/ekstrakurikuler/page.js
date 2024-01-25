import React from "react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

export default function CommunicationStyles() {
  return (
    <div className="px-6 py-32 lg:pt-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-blue-600">
          Kegiatan
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ekstrakurikuler
        </h1>
        <p className="mt-6 text-xl leading-8">
          Kegiatan ekstrakurikuler yang membantu mengembangkan kreatifitas dan
          potensi murid di SDQ Baitul Qurra&apos; Abdya:
        </p>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-blue-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900 text-lg">
                  Olahraga Sunah.
                </strong>{" "}
                <br />
                Mengajarkan murid untuk <strong>berenang</strong> dan{" "}
                <strong>memanah</strong>, kegiatan ini bertujuan untuk
                mengembangkan keterampilan fisik dan kesehatan, sekaligus
                membekali mereka dengan olahraga sunah yang bermanfaat.
                <br />
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-blue-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900 text-lg ">
                  Pramuka
                </strong>{" "}
                <br />
                Sebagai kegiatan pramuka, murid diajak untuk mengembangkan
                kemandirian, kepemimpinan, dan semangat kebersamaan. Melalui
                petualangan dan kegiatan luar ruangan, pramuka membantu
                membentuk karakter dan kecakapan hidup.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-blue-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900 text-lg">
                  Olahraga Umum.
                </strong>{" "}
                <br /> Kegiatan ini melibatkan berbagai olahraga umum seperti
                <strong> badminton</strong>, <strong>sepak bola</strong>, dan{" "}
                <strong>karate</strong>. Murid diajak untuk menjalani gaya hidup
                aktif dan menjaga kebugaran tubuh.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-blue-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900 text-lg">
                  Minat Bakat.
                </strong>{" "}
                <br />
                Memberikan ruang bagi murid untuk mengeksplorasi minat dan bakat
                mereka. Kegiatan meliputi <strong>pidato cilik</strong>,{" "}
                <strong>melukis dan mewarnai</strong>, <strong>tarian</strong>,
                dan <strong>rapa&apos;i</strong>, untuk membantu mereka
                menemukan potensi kreatif dan seni.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-blue-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900 text-lg">
                  Bimbingan MTQ.
                </strong>{" "}
                <br />
                Kegiatan ini fokus pada pembinaan keilmuan Al-Qur&apos;an, termasuk{" "}
                <strong>tilawatil Qur&apos;an</strong>,{" "}
                <strong>syarhil Qur&apos;an</strong>, <strong>tartil</strong>, dan{" "}
                <strong>kaligrafi</strong>. Memberikan pendekatan holistik
                terhadap pembelajaran agama.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-blue-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900 text-lg">
                  Pembinaan Olimpiade Matematika dan Sains.
                </strong>{" "}
                <br />
                Dengan fokus pada pembinaan olimpiade matematika dan sains,
                kegiatan ini menantang murid untuk mengembangkan kemampuan
                logika, analisis, dan pemecahan masalah. Mendukung pengembangan
                potensi akademis mereka.
              </span>
            </li>
          </ul>
          <p className="mt-10">
            This communication style tips should prepare you to face against
            greek top businesswomen and businessmen.
          </p>
        </div>
        <figure className="mt-16">
          <Image
            height={3456}
            width={5184}
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src={"/images-3.png"}
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            Karnaval murid SDQ Baitul Qurra&apos; Abdya.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
