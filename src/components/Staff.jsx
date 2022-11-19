
const features = [
  { name: 'Delitos contra la libertad condicional', description: 'Made from natural materials. Grain and color vary with each item.' },
  { name: 'Etapa de ejecución - libertad condicional', description: 'Made from natural materials. Grain and color vary with each item.' },
  { name: 'Asistencia y asesoramiento personalizado durante el cumplimiento de condenas', description: 'Made from natural materials. Grain and color vary with each item.' },
  { name: 'Urgencias con personas detenidas 24hs', description: 'Made from natural materials. Grain and color vary with each item.' },
]

export default function Example() {
  return (
    <div className="bg-[#adb5bd] text-black ">
      <div className="mx-20 grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestro Staff</h2>
          <p className="mt-4 text-gray-500">
          Al tratarse de procesos penales, resulta fundamental para nuestro staff entender las necesidades de quien confía su caso. Por ello, siempre habrá disponibilidad inmediata para actuar cuando la situación lo requiera. Trabajamos en el ámbito de CABA y Provincia de Buenos Aires, también en todo el país si se trata de causas que tramitan en el fuero federal. Trabajaremos así, de manera rápida y eficaz la mejor estrategia posible para la solución de su problema. 
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                {/* <dd className="mt-2 text-sm text-white">{feature.description}</dd> */}
              </div>
            ))}
          </dl>
        </div>

      </div>
    </div>
  )
}