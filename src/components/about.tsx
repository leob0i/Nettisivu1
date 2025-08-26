// src/components/about.tsx
export default function About() {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-center">Meistä</h2>
      <p className="mt-2 text-slate-600 max-w-2xl mx-auto text-center">
        Olemme uusi ja nuorekas yritys joka suunnittelee ja toteuttaa asiakaspalvelubotteja, verkkosivuja, mobiilisovelluksia tai mitä vain
        ketterästi, tulokset ja selkeys edellä! Toimimme luotettavasti sekä jokainen asiakas on meille yksilö, ja siksi räätälöimme palvelumme juuri sinun tarpeisiisi sopivaksi. Ota rohkeasti yhteyttä ja pyydä tarjous!
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="font-semibold">Miten työskentelemme?</div>
          <ul className="mt-2 list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>💬 Aluksi käymme läpi tarpeesi ja toiveesi</li>
            <li>🛠 Suunnittelemme ja esittelemme ehdotuksen teknisestä toteutuksesta</li>
            <li>🚀 Aloitamme kehityksen ja pidämme sinut ajan tasalla, ehdotamme ja vastaanotamme ideoita!</li>
            <li>✅ Lopuksi saat valmiin ratkaisun edullisesti ja avaimet käteen -periaatteella! Tarvittaessa voidaan sopia myös jatkokehityksestä, ylläpidosta ja lisätoiminnoista, täysin joustavasti tarpeidesi mukaan!</li>
          </ul>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="font-semibold">Miksi valita meidät?</div>
          <p className="mt-2 text-sm text-slate-700">
            Työskentelemme nopeasti, luotettavasti ja aina markkinoiden halvimmalla hinnalla!✨ 
            Ota rohkeasti yhteyttä ja pyydä maksuton arvio!
          </p>
          <a
            href="#yhteys"
            className="mt-4 inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
          >
            Pyydä maksuton arvio!
          </a>
          <p className="mt-2 text-xs text-slate-500">Vastaan yleensä saman päivän aikana.</p>
        </div>
      </div>
    </div>
  );
}
