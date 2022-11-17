import ley from '../assets/leyvrt1.jpg';

const features = [
  { name: 'Delitos de estupefacientes', description: 'Designed by Good Goods, Inc.' },
  { name: 'Delitos contra la integridad sexual', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Delitos contra la vida e integridad física', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Delitos contra la propiedad', description: 'Hand sanded and finished with natural oil' },
  { name: 'Delitos informáticos', description: 'Wood card tray and 3 refill packs' },
  { name: 'Delitos contra la libertad condicional', description: 'Made from natural materials. Grain and color vary with each item.' },
  { name: 'Etapa de ejecución - libertad condicional', description: 'Made from natural materials. Grain and color vary with each item.' },
  { name: 'Asistencia y asesoramiento personalizado durante el cumplimiento de condenas', description: 'Made from natural materials. Grain and color vary with each item.' },
  { name: 'Urgencias con personas detenidas 24hs', description: 'Made from natural materials. Grain and color vary with each item.' },
]

export default function Example() {
  return (
    <div className="bg-white mx-20">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
          <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
            steel divider separates active cards from new ones, or can be used to archive important task lists.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-1 sm:gap-3 lg:gap-4">
          <img
            src={ley}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}