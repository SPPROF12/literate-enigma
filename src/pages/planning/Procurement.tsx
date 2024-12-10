import { useState } from 'react';
import { ProgressBar } from '../../components/planning/ProgressBar';
import { ActionButtons } from '../../components/planning/ActionButtons';
import { QuestionInput } from '../../components/planning/QuestionInput';

export function Procurement() {
  const [answers, setAnswers] = useState({
    practices: '',
    services: '',
    procurement: {
      devices: false,
      software_solutions: false,
      cloud_services: false
    },
    devicesQuestion1: '',
    devicesQuestion2: '',
    devicesQuestion3: '',
    devicesQuestion4: '',
    devicesQuestion5: '',
    softwareQuestion1: '',
    softwareQuestion2: '',
    softwareQuestion3: '',
    softwareQuestion4: '',
    cloudQuestion1: '',
    cloudQuestion2: '',
    cloudQuestion3: '',
    cloudQuestion4: '',
    cloudQuestion5: '',
    cloudQuestion6: '',
    cloudQuestion7: '',
    cloudQuestion8: ''
  });

  const handleChange = (field: keyof typeof answers) => (value: any) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const toggleProcurementType = (type: keyof typeof answers.procurement) => {
    setAnswers(prev => ({
      ...prev,
      procurement: {
        ...prev.procurement,
        [type]: !prev.procurement[type]
      }
    }));
  };

  const totalQuestions = 3 + 5 + 7 + 8; // 3 top-level + 5 devices + 7 software + 8 cloud
  const answeredQuestions = [
    answers.practices,
    answers.services,
    ...Object.values(answers.procurement),
    answers.devicesQuestion1,
    answers.devicesQuestion2,
    answers.devicesQuestion3,
    answers.devicesQuestion4,
    answers.devicesQuestion5,
    answers.softwareQuestion1,
    answers.softwareQuestion2,
    answers.softwareQuestion3,
    answers.softwareQuestion4,
    answers.softwareQuestion5,
    answers.softwareQuestion6,
    answers.softwareQuestion7,
    answers.cloudQuestion1,
    answers.cloudQuestion2,
    answers.cloudQuestion3,
    answers.cloudQuestion4,
    answers.cloudQuestion5,
    answers.cloudQuestion6,
    answers.cloudQuestion7,
    answers.cloudQuestion8
  ].filter(Boolean).length;

  const progress = (answeredQuestions / totalQuestions) * 100;

  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Procuring Digital Services, Software and/or Hardware</h1>
        <ActionButtons />
      </div>

      <ProgressBar progress={progress} />

      <div className="space-y-8">
        <div>
          <h4>1.1 What environmentally sustainable practices do your suppliers operate under?</h4>
          <textarea
            value={answers.practices}
            onChange={e => handleChange('practices')(e.target.value)}
            rows={4}
            cols={100}
          />
        </div>

        <div>
          <h4>1.3 What type of procurement are you planning?</h4>
          <div>
            <label>
              <input
                type="checkbox"
                checked={answers.procurement.devices}
                onChange={() => toggleProcurementType('devices')}
              />
              Devices
            </label>
            <label>
              <input
                type="checkbox"
                checked={answers.procurement.software_solutions}
                onChange={() => toggleProcurementType('software_solutions')}
              />
              Software Solutions
            </label>
            <label>
              <input
                type="checkbox"
                checked={answers.procurement.cloud_services}
                onChange={() => toggleProcurementType('cloud_services')}
              />
              Cloud Services
            </label>
          </div>
        </div>

        {answers.procurement.devices && (
          <div className="dropdown">
            <h4>Additional Questions for Devices</h4>
            <QuestionInput
              question="Will your solution require new devices for patients and / or health care professionals?"
              tooltip="Consider the necessity and impact of new devices"
              value={answers.devicesQuestion1}
              onChange={handleChange('devicesQuestion1')}
            />
            <QuestionInput
              question="Do you have a system in place for minimising the environmental impacts of the devices you are procuring?"
              tooltip="Outline your strategies for minimizing environmental impact"
              value={answers.devicesQuestion2}
              onChange={handleChange('devicesQuestion2')}
            />
            <QuestionInput
              question="Do you maintain an inventory of all devices that includes the age and warranty details for each item?"
              tooltip="Ensure proper tracking and management of devices"
              value={answers.devicesQuestion3}
              onChange={handleChange('devicesQuestion3')}
            />
            <QuestionInput
              question="How do you intend to maximise the lifetime of each device? Will warranties be routinely extended? How much repair can be undertaken?"
              tooltip="Discuss plans for extending device lifespan"
              value={answers.devicesQuestion4}
              onChange={handleChange('devicesQuestion4')}
            />
            <QuestionInput
              question="When the device is finally decommissioned, what provisions have been made for re-using and/or recycling it? Are you transparent on levels of hardware re-use, recycling and e-waste generation?"
              tooltip="Detail your end-of-life management strategies"
              value={answers.devicesQuestion5}
              onChange={handleChange('devicesQuestion5')}
            />
          </div>
        )}

        {answers.procurement.software_solutions && (
          <div className="dropdown">
            <h4>Additional Questions for Software Solutions</h4>
            <QuestionInput
              question="What green software principles does your provider, or in house tech team, adopt?"
              tooltip="These include, for example, maximizing the efficiency of the most regularly run sections of code, not over engineering the code for accuracy beyond what is required in that specific application, and minimizing the data the software is processing. The Green Software Foundation's provides more detail on these, as does this resource on , one of the ten recommendations.  Be aware that following these recommendations will not eliminate environmental impacts , but it will reduce them."
              value={answers.softwareQuestion1}
              onChange={handleChange('softwareQuestion1')}
            />
            <QuestionInput
              question="Does the software contain in-built carbon calculators so that you can monitor your carbon usage?"
              tooltip="In-built calculators mean that tools have been incorporated into the software you procure to allow you to calculate carbon emissions arising from the use of the software.  Such tools might be: <ul><li>One of <a href='https://www.thegreenwebfoundation.org/tools/#carbon-metrics' target='_blank'>these from the Green Web Foundation</a> or</li>"
              value={answers.softwareQuestion2}
              onChange={handleChange('softwareQuestion2')}
            />
            <QuestionInput
              question="Does the software you are procuring or developing include AI?"
              tooltip="AI has a high energy consumption.  Digital health systems increasingly offer AI enhanced solutions. For example although virtual care systems may just comprise conventional telehealth and remote monitoring, <a href='https://healthtechmagazine.net/article/2024/03/Integrating-ai-with-virtual-care-perfcon' target='_blank'>AI is increasingly being introduced into these systems</a>. Check whether AI is incorporated into the digital health system you are considering.  If it is, ask your supplier the following questions: <ul><li>How were carbon emissions minimized during the training of the AI?  For example, were energy efficient (low power) configurations used during training and/or was shared data used in training to minimize big data set redundancy with all the unnecessary environmental impacts that implies?</li><li>Is the AI included in the digital health system optimally tuned such that it uses as little energy as possible whilst preserving the necessary level of performance? </li></ul>"
              value={answers.softwareQuestion3}
              onChange={handleChange('softwareQuestion3')}
            />
            <QuestionInput
              question="What degree of interoperability is there between the software you wish to procure or develop, and other software you use, or are planning to use?"
              tooltip="This is important to consider for long term sustainability of the service. A high level of interoperability between your software systems means there is a reduced likelihood of complex and energy intensive integration or replacement projects now and in the future. <p></p>Interoperability in software is usually achieved through Application Programming Interfaces (APIs). Check what API standards the software adheres to and how that compares with API standards of any existing or planned software you may want the digital health system to integrate with. For an introduction to API standards, this <a href='https://blog.axway.com/learning-center/apis/basics/api-industry-standards' target='_blank'>industry blog</a> is useful. It outlines the different API standards in different sectors, including health. <a href='https://www.healthit.gov/isa/understanding-emerging-api-based-standards' target='_blank'>Interoperability standards in Health IT</a> are still emerging – with <a href='https://www.hl7.org/fhir/' target='_blank'>FHIR</a> one of the leaders."
              value={answers.softwareQuestion4}
              onChange={handleChange('softwareQuestion4')}
            />
            <QuestionInput
              question="Can the software work on existing devices rather than requiring additional purchases?"
              tooltip="If the software can work on existing devices, it saves the need to manufacture further digital devices, therefore reducing environmental impacts associated with mining, manufacture, and waste. <p></p>However, if a user's own device, typically their phone, is, for example, used to host monitoring tasks that form part of a digital health system, then the user may have to pay for this themselves. This is because it may be difficult to separate out the element of their ongoing phone costs that are attributable to the digital health system. Having users cover the costs themselves is an equity issue."
              value={answers.softwareQuestion5}
              onChange={handleChange('softwareQuestion5')}
            />
            <QuestionInput
              question="Can the software be used on digital devices that are 5 years old or more?"
              tooltip="The energy efficiency gains from new devices do not offset the impacts linked to their manufacturing. Given this, it is important that the software can operate on the oldest possible equipment, so no new equipment needs to be purchased to access the software."
              value={answers.softwareQuestion6}
              onChange={handleChange('softwareQuestion6')}
            />
            <QuestionInput
              question="What regular updates does your software provider or in house tech team give to support the long term use of the digital service?"
              tooltip="Make sure the service guarantees the provision of corrective updates throughout the expected lifespan of the software you are procuring. As well as prolonging the lifespan of the software, this reduces the risk of service-related equipment becoming obsolescent as the software running on it is no longer supported. <p></p>Be aware that owing to the fast evolution of technology and the consequent expectations around it, it is possible for the lifespan of digital systems to be over extended. So, for example, a digital health system user interface, for the patient or healthcare professional, might appear increasingly clunky as it ages, and this might ultimately result in the patient or healthcare professional not using it. Clearly it would then not achieve its intended health benefits and yet still be running with the associated environmental impacts."
              value={answers.softwareQuestion7}
              onChange={handleChange('softwareQuestion7')}
            />
          </div>
        )}
        {answers.procurement.cloud_services && (
          <div className="dropdown">
            <h4>Additional Questions for Cloud Services</h4>
            <QuestionInput
              question="How is the data centre powered? If it is mainly using renewables, is it using its own renewable energy, or is it powered from the grid?"
              value={answers.cloudQuestion1}
              onChange={handleChange('cloudQuestion1')}
            />
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
              onChange={handleChange('cloudQuestion5')}
            />
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
      </div>
    </div>
  );
}