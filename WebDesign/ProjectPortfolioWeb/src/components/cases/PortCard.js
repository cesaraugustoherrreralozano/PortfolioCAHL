
export default function PortCard({data, index}){

    return(

        <div onMouseEnter={()=>{
            const title_element =  document.getElementById(index)
            title_element.classList.add('text-blue-700')
            
        }} 

        onMouseLeave={()=>{
            const title_element =  document.getElementById(index)
            title_element.classList.remove('text-blue-700')
            
        }}
        
        className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex-shrink-0">
          <img id={index} class="lg:h-60 md:h-36 w-full object-cover object-center scale-110 transition-all duration-4000 hover:scale-100" src={data.imageUrl} alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-grey-100">
              
                {data.category.name}
              
            </p>
            <a href={data.href} className="mt-2 block">
              <p id={index} className="lg:text-3xl pb-6text-2xl font-semibold text-gray-900 transition duration-3000 ease-in-out">{data.title}</p>
              <p className="mt-3 text-md space-y-2 leading-6 text-gray-500">{data.description}</p>
            </a>
          </div>
            </div>
          </div>

    )
}