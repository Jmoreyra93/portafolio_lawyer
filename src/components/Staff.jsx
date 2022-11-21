
const features = [
  { name: 'Delitos contra la libertad ', description: 'Made from natural materials. Grain and color vary with each item.', icon: '<GavelIcon />' },
  { name: 'Etapa de ejecución - libertad condicional', description: 'Made from natural materials. Grain and color vary with each item.' },
  { name: 'Asistencia y asesoramiento personalizado durante el cumplimiento de condenas', description: 'Made from natural materials. Grain and color vary with each item.' },
  { name: 'Urgencias con personas detenidas 24hs', description: 'Made from natural materials. Grain and color vary with each item.' },
]

export default function Example() {
  return (
    <div className="bg-[#adb5bd] text-black ">
      <div className="mx-20 grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 max-lg:px-8 px-24 sm:px-2 sm:py-10 lg:max-w-7xl lg:px-4">
        <div>
        <p className='text-4xl font-bold inline border-b-4 border-amber-400 text-stone-800'>Contactenos</p>
          <p className="mt-4 text-2xl max-lg:text-base	 text-gray-500">
          Al tratarse de procesos penales, resulta fundamental para nuestro staff entender las necesidades de quien confía su caso. Por ello, siempre habrá disponibilidad inmediata para actuar cuando la situación lo requiera. Trabajamos en el ámbito de CABA y Provincia de Buenos Aires, también en todo el país si se trata de causas que tramitan en el fuero federal. Trabajaremos así, de manera rápida y eficaz la mejor estrategia posible para la solución de su problema. 
          </p>

          <dl className="mt-16 px-28 grid  gap-x-6 gap-y-10 sm:grid-cols-2 max-lg:grid-cols-1 sm:gap-y-16 lg:gap-x-8 max-lg:px-4">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="text-lg	font-bold	 text-center text-gray-900 max-lg:text-base ">{feature.name}</dt>
                {/* <dd className="mt-2 text-sm text-white">{feature.description}</dd> */}
                <dd className="mt-2 text-sm text-white"></dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </div>
  )
}