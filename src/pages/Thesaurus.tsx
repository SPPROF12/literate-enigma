import { Search } from 'lucide-react';

interface Term {
  term: string;
  definition: string;
  links?: string[];
  bullets?: string[];
  followupBullets?: string[];
  example?: string;
}

export function Thesaurus() {
  const terms: Term[] = [
    {
      term: "Circular Economy",
      definition: "The circular economy is an economic system based on the reuse and regeneration of materials or products, especially as a means of continuing production in a sustainable or environmentally friendly way."
    },
    {
      term: "Cooling systems (Data centres)",
      definition: "Some examples can be found",
      links: ["https://www.datacenters.com/news/data-center-cooling-future-of-cooling-systems-methods-and-technologies"]
    },
    {
      term: "Data sufficiency",
      definition: "Data sufficiency means only collecting and processing data sufficient for the outcome you need to achieve. It is a crucial consideration in minimising the environmental impacts of data, and in the healthcare context it can have the added benefit of reducing data overload for healthcare professionals."
    },
    {
      term: "Devices",
      definition: "In this tool, when we mention devices we include phones, sensors, and laptops, as well as servers and networking components such as switches and routers."
    },
    {
      term: "Edge Computing",
      definition: "Edge computing simply means streamlining your data – so stripping out any redundant data and compressing your data – as close as possible to where the data is generated."
    },
    {
      term: "Offsetting",
      definition: "Learn more about offsetting, and other terms that might come up relating to an energy supplier's climate commitments (for example Power Purchase Agreements)",
      links: [
        "https://learn.greensoftware.foundation/climate-commitments/",
        "https://www.theguardian.com/environment/2023/sep/19/do-carbon-credit-reduce-emissions-greenhouse-gases"
      ]
    },
    {
      term: "Rebound Effects",
      definition: "Rebound effects are linked with increased efficiency in processes or technologies. When you make changes to increase efficiency to reduce the use of resources (such as energy, amount of compute, time), there is a risk that your new proposition will stimulate an increase in demand and instead of having savings on resources, you end up with the same or increased consumption. So a successful strategy that increases efficiency in energy consumption to reduce carbon emissions, might in fact generate more carbon emissions.",
      example: "A data centre uses large amount of energy to power its servers producing a large amount of carbon emissions. To make it more environmentally sustainable, the management of the data centre decides to switch from using energy from fossil fuels to using energy from renewables, (wind and solar). That decision could lead to some possible rebound effects:",
      bullets: [
        "The perception that swapping to renewable energy causes fewer carbon emissions makes users feel they don't need to limit their use, which in turn leads to an overall increase in the use of the data centre.",
        "The change to renewables attracts new business customers in addition to the existing ones.",
        "Extra revenue enables the data centre owner to invest in a new building and equipment for a data centre expansion.",
        "New business customers increase their provision of digital services stimulating the demand for more data centres and the economy in general."
      ],
      followupBullets: [
        "Provide transparent information and communication to raise awareness showing that renewable energy also has a carbon footprint.",
        "Invest extra revenue in improving the environmental sustainability performance of the existing facilities or donate it to sustainability charities, instead of investing it in business growth.",
        "Adopt new procedures to reduce idle servers - for example, sharing racks amongst different business customers to delay or prevent the need to increase capacity."
      ],
      links: ["https://www.bmj.com/content/385/bmj-2023-078303"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Digital Health Sustainability Thesaurus</h1>

      <div className="mb-8">
        <p className="text-gray-600">
          Terms are listed in alphabetical order. You can explore definitions for more technical terms <a href="https://www.techtarget.com/whatis/" className="text-blue-600 hover:underline">here</a>.
        </p>
      </div>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search terms..."
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>

      <div className="space-y-6">
        {terms.map((term, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-gray-900">{term.term}</h3>
            <p className="mt-2 text-gray-600">{term.definition}</p>

            {term.example && (
              <p className="mt-4 text-gray-600">{term.example}</p>
            )}

            {term.bullets && (
              <ul className="list-disc pl-5 mt-4 space-y-2">
                {term.bullets.map((bullet, i) => (
                  <li key={i} className="text-gray-600">{bullet}</li>
                ))}
              </ul>
            )}

            {term.followupBullets && (
              <>
                <p className="mt-4 text-gray-600">To deal with potential rebound effects, the data centre management could consider mitigation strategies alongside their proposed changes:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  {term.followupBullets.map((bullet, i) => (
                    <li key={i} className="text-gray-600">{bullet}</li>
                  ))}
                </ul>
              </>
            )}

            {term.links && term.links.map((link, i) => (
              <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-600 hover:underline">
                Learn more here
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}