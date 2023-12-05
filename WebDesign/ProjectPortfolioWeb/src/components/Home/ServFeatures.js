import ghist from '../../assets/img/grafico-histograma.svg'
import gbuild from '../../assets/img/edificio.svg'
import gdata from '../../assets/img/chat-flecha-crecer.svg'
import gseo from '../../assets/img/globo.svg'
import gweb from '../../assets/img/computadora.svg'
import gds from '../../assets/img/almuerzo-cohete.svg'

const incentives = [
  {
    name: 'Business Analysis',
    imageSrc: gbuild,
    description: " Our Business Analysis expertise allows us to delve deep into your organizational processes, identifying opportunities for improvement and proposing effective solutions. ",
  },
  {
    name: 'Business Intelligence',
    imageSrc: ghist,
    description: "Leveraging the power of Business Intelligence, we transform raw data into actionable insights, empowering your decision-making process with a clear understanding of your business performance.",
  },
  {
    name: 'Data Analysis',
    imageSrc: gdata,
    description: "Our Data Analysis services provide meticulous examination of data sets, drawing meaningful conclusions and supporting strategic initiatives. ",
  },  
  {
    name: 'Data Science',
    imageSrc: gds,
    description: "With a commitment to cutting-edge technology, our Data Science solutions employ advanced algorithms to unlock the full potential of your data, revealing patterns and trends that drive innovation.",
  },
  {
    name: 'Web Design',
    imageSrc: gweb,
    description: "Our Web Design services focus on creating visually appealing and user-friendly websites",
  },
  {
    name: 'SEO (Search Engine Optimization)',
    imageSrc: gseo,
    description: "Our SEO strategies ensure your online presence is optimized for maximum visibility. ",
  },
]

export default function ServFeatures() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 ">
              What We <span className='text-blue-900 hover:text-blue-700'>Offer</span>
            </h2>
            <p className="mt-4 text-gray-500">
            At <span className='text-blue-900 hover:text-blue-700'>CAHL Analytics</span>, we offer a comprehensive suite of services tailored to meet the diverse needs of modern businesses. 
            </p>
          </div>
          <div className="text-center mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="mx-auto h-14 w-14 object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}