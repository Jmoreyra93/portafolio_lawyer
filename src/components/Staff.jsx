
const features = [
  { name: 'Delitos contra la libertad ', description: 'Made from natural materials. Grain and color vary with each item.', icon: '<GavelIcon />' },
  { name: 'Etapa de ejecución - libertad condicional', description: 'Made from natural materials. Grain and color vary with each item.' },
  { name: 'Asistencia y asesoramiento personalizado durante el cumplimiento de condenas', description: 'Made from natural materials. Grain and color vary with each item.' },
  { name: 'Urgencias con personas detenidas 24hs', description: 'Made from natural materials. Grain and color vary with each item.' },
]

export default function Example() {
  return (
    <div className="bg-[#DDD4C3] shadow-inner text-black ">
      <div className="mx-20  grid max-w-2xl grid-cols-1 items-center gap-y-8 gap-x-8 py-24 max-lg:px-0  px-24 sm:px-2 sm:py-10 lg:max-w-7xl lg:px-4">
          <p className=' text-4xl font-bold inline  text-stone-800'>Nosotros</p>
        <div className="bg-[#DBC48E] rounded-md p-4 max-lg:p-0">
          <p className="m-4 max-lg:m-2 text-xl text-[#0d1b2a] max-lg:text-base max-lg:pl-8">
          Al tratarse de procesos penales, resulta fundamental para nuestro staff entender las necesidades de quien confía su caso. Por ello, siempre habrá disponibilidad inmediata para actuar cuando la situación lo requiera. Trabajamos en el ámbito de CABA y Provincia de Buenos Aires, también en todo el país si se trata de causas que tramitan en el fuero federal. Trabajaremos así, de manera rápida y eficaz la mejor estrategia posible para la solución de su problema. 
          </p>

          <dl className="mt-16 px-28 grid gap-x-6 gap-y-5 sm:grid-cols-2 max-lg:grid-cols-1 sm:gap-y-8 lg:gap-x-8 max-lg:px-4 max-lg:mt-2">
            {features.map((feature) => (
              <div key={feature.name} className="border-gray-200 pt-4">
                <dt className="text-lg flex justify-center items-center	h-28 shadow-md hover:shadow-lg rounded-md	font-bold	 text-center text-[#2e2e2e] max-lg:text-base ">{feature.name}</dt>

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