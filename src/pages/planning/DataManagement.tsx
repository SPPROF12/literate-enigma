import { useState } from 'react';
import { QuestionInput } from '../../components/planning/QuestionInput';
import { ProgressBar } from '../../components/planning/ProgressBar';
import { ActionButtons } from '../../components/planning/ActionButtons';

export function DataManagement() {
  const [answers, setAnswers] = useState({
    dataPlans: '',
    dataSufficiency: '',
    dataDeletion: '',
    dataEndOfLife: '',
    hosting: {
      cloud: false,
      local: false,
      notSure: false
    },
    cloudQuestion1: '',
    cloudQuestion2: '',
    cloudQuestion3: '',
    cloudQuestion4: '',
    cloudQuestion5: '',
    cloudQuestion6: '',
    cloudQuestion7: '',
    cloudQuestion8: '',
    localQuestion1: '',
    localQuestion2: '',
    localQuestion3: '',
    localQuestion4: '',
    localQuestion5: '',
    localQuestion6: '',
    localQuestion7: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (field: keyof typeof answers) => (value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const toggleHostingType = (type: keyof typeof answers.hosting) => {
    if (type === 'notSure') {
      setShowPopup(true);
      setAnswers(prev => ({
        ...prev,
        hosting: {
          ...prev.hosting,
          notSure: !prev.hosting.notSure,
          cloud: false,
          local: false
        }
      }));
    } else {
      setAnswers(prev => ({
        ...prev,
        hosting: {
          ...prev.hosting,
          [type]: !prev.hosting[type],
          notSure: false
        }
      }));
    }
  };

  // Calculate progress including nested questions
  const totalQuestions = 4 + 8 + 7; // 4 top-level + 8 cloud + 7 local
  const answeredQuestions = [
    answers.dataPlans,
    answers.dataSufficiency,
    answers.dataDeletion,
    answers.dataEndOfLife,
    ...Object.values(answers.hosting),
    answers.cloudQuestion1,
    answers.cloudQuestion2,
    answers.cloudQuestion3,
    answers.cloudQuestion4,
    answers.cloudQuestion5,
    answers.cloudQuestion6,
    answers.cloudQuestion7,
    answers.cloudQuestion8,
    answers.localQuestion1,
    answers.localQuestion2,
    answers.localQuestion3,
    answers.localQuestion4,
    answers.localQuestion5,
    answers.localQuestion6,
    answers.localQuestion7
  ].filter(Boolean).length;

  const progress = (answeredQuestions / totalQuestions) * 100;

  return (
    <div className="relative">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Collecting, storing, and/or processing data</h1>
        <ActionButtons />
      </div>

      <ProgressBar progress={progress} />

      <div className="space-y-8">
        <QuestionInput
          question="What data do you plan on collecting, storing and/or processing over the next decade, on an annual basis? Are you aware of any other planned or existing Digital Service that is collecting part or all of this data?"
          tooltip="Planning mitigates the risk of wasting compute resources by either over or underestimating the data that you will need. Overestimation will generate unnecessary data and underestimation increases the risk that the digital health system will not achieve its health outcomes. If any of the data you plan to collect is already being collected, or will be collected via another planned digital health initiative, find out whether you could access it, rather than collecting it again from scratch. Sharing data avoids unnecessary energy expenditure in storing duplicate data. It also avoids the unnecessary effort, and likely data collection fatigue, in collecting the same data twice. Be aware that even when data is only collected once, data providers may find the exercise burdensome and data collectors may even resort to outsourcing the data collection. Both of these can contribute to poor data quality. To incentivise people to provide and collect good quality data it is advisable to ensure that there are tangible benefits for each local community involved."
          value={answers.dataPlans}
          onChange={handleChange('dataPlans')}
        />

        <QuestionInput
          question="How do you plan to ensure data sufficiency?"
          tooltip="Data sufficiency means only collecting and processing data sufficient for the outcome you need to achieve. Data 'beyond what is sufficient' can take many forms. An example would be collecting data on employment or marital status when the digital health service being planned has no use for this. Other examples include: Images with an unnecessarily high resolution Monitoring data collected at an unnecessarily high frequency (what is actually needed to assess health outcomes?) High resolution videoconferencing solutions instead of phone calls or low resolution conferencing."
          value={answers.dataSufficiency}
          onChange={handleChange('dataSufficiency')}
        />

        <QuestionInput
          question="What systems do you have in place to delete data that is no longer needed, and to check and manage duplicate data?"
          tooltip="Addressing the large amounts of data that are collected but never used ('dark data') can significantly reduce energy consumption. Use the following techniques to achieve this: Data Governance: Find the relevant regulation for how long data generated by the Digital Health service needs to be stored, and establish processes to ensure unnecessary data is deleted Data Management: Organization of data into distinct categories makes it easy to find and gives an accurate and complete view. Data Sharing Strategy: this can prevent data redundancy. Tiered Data Storage: Store your data in a way that reflects how regularly it is used and the speed with which it needs to be accessible. Cold storage has a lower energy cost and can be used for archived data."
          value={answers.dataDeletion}
          onChange={handleChange('dataDeletion')}
        />

        <QuestionInput
          question="What happens to the data when the system is no longer in use?"
          tooltip="Digital health systems may not last as long as originally anticipated, and the data associated with them is often simply left in situ. It is therefore important to have robust plans in place from the outset to ensure that redundant data is deleted when a digital health system becomes inactive."
          value={answers.dataEndOfLife}
          onChange={handleChange('dataEndOfLife')}
        />

        <div>
          <h4>Will you use cloud or local server(s) or both to host data?</h4>
          <div className="space-x-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={answers.hosting.cloud}
                onChange={() => toggleHostingType('cloud')}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Cloud</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={answers.hosting.local}
                onChange={() => toggleHostingType('local')}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Local Server(s)</span>
            </label>
            <div className="inline-flex items-center">
              <span>Not Sure</span>
              <button
                onClick={() => setShowPopup(true)}
                className="ml-1 text-gray-400 hover:text-gray-600"
                aria-label="More information"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-2xl relative">
              <button onClick={() => setShowPopup(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">×</button>
              <div className="prose">
                <p>
                  Have you compared a cloud option with the local server option from an environmental sustainability perspective? Cloud hosting is capable of achieving greater energy efficiency if it is correctly configured. However, be aware that other issues are being raised around cloud, particularly in relation to{' '}
                  <a href="https://www.techtarget.com/whatis/definition/data-sovereignty" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">data sovereignty</a>,{' '}
                  <a href="https://www.cloudflare.com/en-gb/learning/cloud/what-is-vendor-lock-in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">vendor lock ins</a> and{' '}
                  <a href="https://www.thegreenwebfoundation.org/news/the-politics-of-data-centers/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">social justice</a>.
                </p>
                <p>
                  Furthermore, while Cloud is usually more efficient for large scale processing, you will want to minimise the transfer of data between your Digital Health System end users and the cloud as this process requires energy and incurs carbon emissions. This means it may make sense to undertake{' '}
                  <a href="thesaurus.html#edg_com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">"edge computing"</a> on your local servers if they are nearer your end users.
                </p>
                <p>
                  If your Digital Health System will be hosted on a hybrid model – so making use of both local servers and cloud – investigate both of these options and consider how best to split the data and processing between them.
                </p>
              </div>
            </div>
          </div>
        )}

        {answers.hosting.cloud && (
          <div className="dropdown">
            <h4>Additional Questions for Cloud Hosting</h4>
            <QuestionInput
              question="How is the data centre powered? If it is mainly using renewables, is it using its own renewable energy, or is it powered from the grid?"
              value={answers.cloudQuestion1}
              onChange={handleChange('cloudQuestion1')} tooltip={''}            />
            <QuestionInput
              question="If it is powered from the grid, where the proportion of the energy supplied that comes from renewable sources is always changing, does your hosting provider offer any options for temporal or spatial shifting?"
              tooltip="Temporal shifting means making best use of periods when renewables are powering the grid - so maximizing the data processing undertaken during these times. Spatial shifting means allowing your processing to run at a data centre in a different location when the energy supply to the primary data centre is low in renewables. Clearly the degree to which you can fine-tune a Digital Health system may be limited – data processing to provide monitoring, for example, may need to be happening constantly. But there may be considerable flexibility around other processing, such as reporting and data maintenance tasks."
              value={answers.cloudQuestion2}
              onChange={handleChange('cloudQuestion2')}
            />
            <QuestionInput
              question="What types of cooling systems are being used and how much energy and water do they consume?"
              tooltip="Inefficient cooling systems in data centres can significantly increase energy and water consumption, and if excessive heat builds up, this can shorten the lifespan of data centre hardware. [cooling systems: https://maryshade.github.io/thesaurus.html#cooling_systems]"
              value={answers.cloudQuestion3}
              onChange={handleChange('cloudQuestion3')}
            />
            <QuestionInput
              question="Are the PUE, CUE, and WUE sustainability metrics available for the data centre? What are the values for these?"
              tooltip="A PUE of 1 is ideal as it would indicate that all the power supplied to a data centre was used for the computing equipment only. A CUE of 0 is ideal as it would indicate that the data centre operated entirely on carbon-free energy sources. A WUE of 0 is ideal as it would indicate that the data centre consumed no water. Many other useful data centre sustainability metrics are available. [data centre sustainability metrics: https://www.sunbirddcim.com/infographic/top-30-data-center-sustainability-metrics]"
              value={answers.cloudQuestion4}
              onChange={handleChange('cloudQuestion4')}
            />
            <QuestionInput
              question="Is excess heat from the data centre recovered and reused, so it can displace fossil fuel heat sources?"
              value={answers.cloudQuestion5}
              onChange={handleChange('cloudQuestion5')} tooltip={''}            />
            <QuestionInput
              question="What is the plan for the data centre to be sustainably decommissioned if/when it comes to its end of life?"
              tooltip="The proliferation, scale, and rate of technological evolution and environmental impacts of data centres are making this an increasingly important question. [decommissioned: https://www.simslifecycle.com/resources/white-paper-data-center/]"
              value={answers.cloudQuestion6}
              onChange={handleChange('cloudQuestion6')}
            />
            <QuestionInput
              question="Would your digital health system be hosted in a verified green data centre?"
              tooltip="The Green Web Foundation maintains a verified list. [https://www.thegreenwebfoundation.org/tools/directory/]"
              value={answers.cloudQuestion7}
              onChange={handleChange('cloudQuestion7')}
            />
            <QuestionInput
              question="What resource pooling options are offered by your hosting provider?"
              tooltip="Resource pooling in a data centre employs economies of scale to minimise energy use across customers."
              value={answers.cloudQuestion8}
              onChange={handleChange('cloudQuestion8')}
            />
          </div>
        )}

        {answers.hosting.local && (
          <div className="dropdown">
            <h4>Additional Questions for Local Server Hosting</h4>
            <QuestionInput
              question="How is your server room powered?"
              tooltip="You may want to consider swapping your energy supplier for one that makes more use of renewable energy."
              value={answers.localQuestion1}
              onChange={handleChange('localQuestion1')}
            />
            <QuestionInput
              question="Are you under pressure to upgrade your reserve energy system (Uninterruptible Power Supply or UPS) to a more energy efficient model?"
              tooltip="Be aware a new UPS will come with a substantial embodied carbon footprint. You should avoid upgrading until your current system is at end of life."
              value={answers.localQuestion2}
              onChange={handleChange('localQuestion2')}
            />
            <QuestionInput
              question="If you have a generator to back up your UPS, what fuel does it use?"
              tooltip="Bio fuels and natural gas are better than diesel from an environmental perspective, and Hydrogenated Vegetable Oil (HVO) may also be a good alternative. Also consider the transport emissions associated with your choice of fuel."
              value={answers.localQuestion3}
              onChange={handleChange('localQuestion3')}
            />
            <QuestionInput
              question="What are the environmental impacts of your server room air conditioning system?"
              tooltip="Monitor the temperature of your server room environment. Overcooling is common in server rooms and temperatures can often be raised without any adverse effects. Aim to maximise the energy efficiency of the AC system. Considerable improvements have been made to the energy efficiency of AC systems in recent years, but be aware that these energy efficiency gains are likely to be dwarfed by the carbon footprint from the production of a new system, so don't be tempted to replace your existing system without actually assessing its efficiency - or its proximity to end of life - first. Consider the Global Warming Potential (GWP) https://www.epa.gov/ghgemissions/understanding-global-warming-potentials of the coolant used by your AC system. If this is high, find out if your system will run on a lower GWP coolant. (Note that if you are using an HFC coolant you should look to replace it as soon as possible, even if this does mean bringing forward the replacement of your whole AC system)."
              value={answers.localQuestion4}
              onChange={handleChange('localQuestion4')}
            />
            <QuestionInput
              question="Are the servers/ server racks in your server room arranged to maximise front to rear air flow?"
              tooltip="If your server room contains multiple server racks, consider 'in row' cooling, where your air conditioning units are positioned as close as possible to the server cabinets to increase their energy efficiency."
              value={answers.localQuestion5}
              onChange={handleChange('localQuestion5')}
            />
            <QuestionInput
              question="Can you recover the servers' waste heat for re-use? For example, using the generated heat to warm the building."
              tooltip="This will maximise energy efficiency."
              value={answers.localQuestion6}
              onChange={handleChange('localQuestion6')}
            />
            <QuestionInput
              question="Do you make environmental impact metrics readily available for your server room?"
              tooltip="PUE and CUE are common metrics and measure Power and Carbon Usage Efficiency, respectively. A PUE of 1 is ideal as it would indicate that all the power supplied to a server room was used for the computing equipment - so no energy was necessary for things like lighting or cooling. A CUE of 0 is ideal as it would indicate that the server room operated entirely on carbon free energy sources."
              value={answers.localQuestion7}
              onChange={handleChange('localQuestion7')}
            />
          </div>
        )}
      </div>
    </div>
  );
}