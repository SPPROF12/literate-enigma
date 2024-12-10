export function Development() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-12 text-center">
          Digital Health Tool Development
        </h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed text-justify">
            The aim of this tool is to support decision making when considering the environmental impacts associated with Digital Health Systems. The tool is not designed to provide answers, but to indicate the questions that you will need to ask and answer to make informed decisions when trying to reduce environmental impacts.
          </p>

          <p className="text-gray-600 leading-relaxed mt-6 text-justify">
            The tool adopted a 'system thinking' approach and is part of the PARIS-DE project, which aims to co-design a sustainable and responsible innovation framework for digital technology. The research considers the multiple, complex and often conflicting narratives that explain carbon emissions. The framework being developed will have responsible innovation at its core to ensure carbon emissions are investigated alongside wider environmental, societal and ethical issues.
          </p>

          <p className="text-gray-700 font-medium mt-8 mb-4 text-justify">
            Other tools that have been developed to help mitigate the environmental impacts of digital technologies include:
          </p>

          <ul className="space-y-4 bg-gray-50 rounded-lg p-6">
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <span className="text-gray-600">The EU</span>
                <a href="https://www.greendigitalcoalition.eu/assets/uploads/2024/04/EGDC-Net-Carbon-Impact-Assessment-Methodology-for-ICT-Solutions.pdf"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 mx-1">
                  Net Carbon Impact Assessment Methodology for ICT Solutions
                </a>
                <span className="text-gray-600">, which focuses specifically on carbon emission impacts.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <span className="text-gray-600">GreenOps. However, it is worth noting that there are</span>
                <a href="https://medium.com/@jolindsaywalton/what-is-greenops-7eed58db87e1"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 mx-1">
                  concerns about the limitations of GreenOps
                </a>
                <span className="text-gray-600">.</span>
              </div>
            </li>
          </ul>

          <p className="text-gray-600 leading-relaxed mt-8 text-justify">
            There are also tools focussed on the economic sustainability of digital health initiatives, such as this
            <a href="https://mcsprogram.org/resource/digital-health-investment-review-tool/"
              target="_blank"
              className="mx-1 text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
              Digital Health Investment Review Tool
            </a>.
            This tool was developed principally for public health audiences and it can help avoid common mistakes such as:
          </p>

          <ul className="space-y-3 bg-gray-50 rounded-lg p-6 mt-4 list-disc pl-10">
            <li className="text-gray-600">The digital health initiative is not resilient in the face of connectivity problems</li>
            <li className="text-gray-600">A lack of provision for ongoing maintenance, support and training costs</li>
            <li className="text-gray-600">Interoperability problems</li>
            <li className="text-gray-600">A lack of accounting for languages and literacy</li>
            <li className="text-gray-600">A lack of alignment with the national digital health framework</li>
          </ul>

          <p className="text-gray-600 leading-relaxed mt-8 italic bg-blue-50 p-6 rounded-lg text-justify">
            The avoidance of such mistakes is also relevant to environmental sustainability: If these mistakes occur, the digital health initiative is unlikely to succeed in delivering better health outcomes and resources will have been wasted in developing it.
          </p>
        </div>
      </div>
    </div>
  );
}