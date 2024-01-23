import React from "react";
import Image from "next/image";

export default function HotTopic() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <Image
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              height={1406}
              width={2107}
              src={"/galery-1.jpg"}
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-2 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pendaftaran
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Pada saat mendaftar calon peserta didik menyerahkan persyaratan
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
                International Reaction.
              </h2>
              <p className="mt-6">
                This situation has been welcomed by markets as it seems to
                signal the end of the political uncertainty that troubled the
                NATO and European Union member following the 2009-18 financial
                crisis. The Athens stock exchange general index surged more than
                7% and Greek bonds rallied.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Conclusion.
              </h2>
              <p className="mt-6">
                Mitsotakis, 55, met with President Katerina Sakellaropoulou, who
                formally gave him the mandate to try to form a government, but
                he declared there would be no point as he saw no way for the
                current Parliament to form a government. He indicated that he
                would return the mandate so that new elections could be held as
                soon as possible. Mitsotakis had long suggested that he would
                not seek a coalition partner, whatever the election outcome, in
                the interest of stable governance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
