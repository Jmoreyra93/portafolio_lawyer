import image_01 from '../assets/detenidos.jpg'
import image_02 from '../assets/asesor.jpg'
import image_03 from '../assets/ejecucion.jpg'



const features = [
  { name: 'Etapa de ejecución - libertad condicional', description: 'Made from natural materials. Grain and color vary with each item.', image: image_03 },
  { name: 'Asistencia y asesoramiento personalizado durante el cumplimiento de condenas', description: 'Made from natural materials. Grain and color vary with each item.', image: image_02 },
  { name: 'Urgencias con personas detenidas 24hs', description: 'Made from natural materials. Grain and color vary with each item.', image: image_01 },
]

export default function Example() {
  return (
    <div className="bg-[#DDD4C3] shadow-inner text-black ">
      <div className="mx-20  grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 max-lg:px-8 px-24 sm:px-2 sm:py-20 lg:max-w-7xl lg:px-10 max-lg:mx-1 max-lg:pb-1">
        <div className="">
          <p className=' text-4xl font-montserrat inline text-gray-800'>Nosotros</p>
          <p className="mt-4 font-montserrat text-2xl max-lg:text-base 	 text-gray-500">
          Al tratarse de procesos penales, resulta fundamental para nuestro staff entender las necesidades de quien confía su caso. Por ello, siempre habrá disponibilidad inmediata para actuar cuando la situación lo requiera. Trabajamos en el ámbito de CABA y Provincia de Buenos Aires, también en todo el país si se trata de causas que tramitan en el fuero federal. Trabajaremos así, de manera rápida y eficaz la mejor estrategia posible para la solución de su problema. 
          </p>
          <dl className=" mt-16 px-28 grid gap-x-6 gap-y-10 sm:grid-cols-3 max-lg:grid-cols-1 sm:gap-y-16 lg:gap-x-8 max-lg:px-4">
            {features.map((feature) => (
              <div key={feature.name} className="border-gray-200 bg-[#56544f]  shadow-md hover:shadow-lg rounded-md">
                <div className="flex flex-col justify-center self-center">
                  <img className="object-cover		 h-48 w-96" src={feature.image} alt=""/>
                </div>
                <dt className="text-lg flex justify-center items-center	h-28 p-4	font-bold	 text-center text-gray-200 max-lg:text-base ">{feature.name}</dt>

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