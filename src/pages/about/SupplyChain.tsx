import { Info, Factory, Truck, Database, Recycle, Pickaxe } from 'lucide-react';

export function SupplyChain() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            The Information and Communication Technology (ICT) Supply Chain
          </h2>

          <div className="flex flex-col items-center mb-6 relative">
            <div className="w-full max-w-3xl">
              <img
                src="https://maryshade.github.io/media/supply_chain.png"
                alt="ICT Supply Chain"
                className="w-full h-auto max-h-[300px] object-contain mx-auto"
              />
            </div>
            <div className="relative group mt-1">
              <Info className="h-5 w-5 cursor-pointer text-gray-500 hover:text-gray-700" />
              <div className="hidden group-hover:block absolute z-10 w-64 p-3 bg-white border rounded shadow-md -translate-x-1/2 left-1/2 text-sm">
                If you prefer a more visual representation of the supply chain, you may find this <a href="https://www.cartografiasdainternet.org/en" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">cartography of the internet</a> and this <a href="https://cartography-of-generative-ai.net/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">cartography of generative AI</a> helpful.
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: <Pickaxe className="h-8 w-8 text-gray-600" />,
                title: "Raw Material Extraction and Processing",
                content: `Raw materials are necessary for the manufacturing of digital infrastructure and devices (e.g. computers, smartphones, cables, and monitors), and are rarely sourced from recycling efforts. The mining and processing of these materials, which include, for example, lithium, copper, gold, and rare earth elements, are associated with high carbon and water footprints, widespread water, soil and air pollution, biodiversity loss, and ecosystem fragmentation associated with land clearing. Much of the world's mining activity is undocumented, meaning that the true extent of mining's environmental impact remains unknown. Furthermore, because mining is often associated with poor working conditions, it also contributes to poor social and economic determinants of health. Often it is the poorest in society who live close to mines and experience these adverse impacts.`,
                info: `Pages 14 to 16 of this report provide more detail on this element of the supply chain.`,
                link: "https://ictc-ctic.ca/reports/building-a-sustainable-ict-ecosystem"
              },
              {
                icon: <Factory className="h-8 w-8 text-gray-600" />,
                title: "Production and Manufacturing",
                content: `The production and manufacturing of many digital devices and infrastructure components have been estimated to account for most of the energy and water consumed over all phases of the supply chain. For example, a two gram memory chip consumes 73% of its lifetime energy during the manufacturing process. In addition, production and manufacturing also generate large quantities of waste, which contributes to soil, water, and air pollution.`,
                info: `Pages 17 to 18 of this report provide more detail on this element of the supply chain.`,
                link: "https://ictc-ctic.ca/reports/building-a-sustainable-ict-ecosystem"
              },
              {
                icon: <Truck className="h-8 w-8 text-gray-600" />,
                title: "Transportation",
                content: `The globalised nature of the current digital technology and infrastructure supply chain inevitably means significant transportation is involved with the movement of materials, components, products, and waste. Transport has a range of environmental impacts and its globally associated emissions account for approximately 23% of all energy related carbon emissions.`
              },
              {
                icon: <Database className="h-8 w-8 text-gray-600" />,
                title: "Data Use (including software and web design)",
                content: `The environmental impacts associated with the use of digital technologies and infrastructure mainly come from the energy needed for data collection, storage, and processing. These energy needs are expected to grow for years to come, potentially outpacing the rate at which renewable energy can be rolled out. In addition to this, water consumption and land use change are increasingly impacting the environment as data centres proliferate, with reports noting that these are often in areas least able to sustain them.`
              },
              {
                icon: <Recycle className="h-8 w-8 text-gray-600" />,
                title: "Recycling and End of Life Disposal",
                content: `It is estimated that over 50 million metric tonnes of electronic waste, or e-waste, was generated in 2019, and this figure is growing annually. This waste, which includes digital hardware and infrastructure, contains many hazardous materials, such as lead and mercury. Much of the disposal of e-waste is undocumented, often ending up in e-waste landfill in low- or middle-income countries, where it generates significant land, water, and air pollution for surrounding communities.`
              }
            ].map((section, index) => (
              <div key={index} className="flex gap-4 p-4 bg-white rounded border border-gray-100 hover:shadow-sm transition-shadow">
                <div className="flex-shrink-0 flex flex-col items-center w-20">
                  {section.icon}
                  <h3 className="text-xs font-medium text-gray-700 text-center mt-1">{section.title}</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-600 text-sm leading-relaxed">{section.content}</p>
                  {section.info && (
                    <div className="mt-2">
                      <a
                        href={section.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 text-xs inline-flex items-center gap-1"
                      >
                        <Info className="h-3 w-3" />
                        {section.info}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}