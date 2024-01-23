import React from "react";
import { InboxIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const features = [
  {
    name: "",
    description: (
      <>
        Email SDQ Baitul Qurra&apos; Abdya <br /> baitulqurraabdya@gmail.com
      </>
    ),
    href: "mailto:baitulqurraabdya@gmail.com",
    icon: IoMail,
  },
  {
    name: "",
    description: (
      <>
        Youtube SDQ Baitul Qurra&apos; Abdya
        <br /> BAITUL QURRA&apos; ABDYA
      </>
    ),
    href: "http://www.leadershipcrossroads.com/mat/cou/Greece.pdf",
    icon: FaYoutube,
  },
  {
    name: "",
    description: (
      <>
        Instagram SDQ Baitul Qurra&apos; Abdya
        <br />
        @sdq_baitulqurra
      </>
    ),
    href: "https://www.instagram.com/sdq_baitulqurra/",
    icon: FaInstagram,
  },
  {
    name: "",
    description: (
      <>
        085260957197 (Ust. Nuzul Fazmi, S.Stat)
        <br />
        082229081121 (Usth. Hesti Raimona, A.Md)
      </>
    ),
    href: "https://wa.me/+6285260957197/",
    icon: FaWhatsapp,
  },
];

export default function References() {
  return (
    <div className="py-24 lg:pt-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sosial Media SDQ Baitul Qurra&apos; Abdya
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Follow sosial media kami untuk mendapatkan informasi terbaru
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 overflow-auto">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-3">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-blue-600"
                    >
                      {feature.icon === FaWhatsapp ? (
                        <span>Hubungi Kami</span>
                      ) : (
                        <span>Follow</span>
                      )}
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
