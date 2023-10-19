import { Card } from '../Card'

const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  } as any
  
  const SingleSpaceFlightCard = ({ key, content }: any) => {
    let date = new Date(content.launch_date_utc);
    return (
      <Card key={key} className="hover:shadow-2xl">
        <div className="h-46 w-36 mx-auto max-w-screen-sm flex items-center justify-center">
          <img src={content.links.mission_patch} alt="" className="mb-10" />
        </div>
        <p className='text-center text-gray-500 text-md'>
          Launch Date: {date.toLocaleDateString("en-US", options)}
        </p>
        <h1 className="mt-6 text-3xl text-bold text-center text-[#22292f]">
          {content.mission_name}
        </h1>
        <p className='text-center text-gray-500 text-sm'>
            Launch status
          {content.launch_success ===  false ? (
            <div className='bg-red-500 text-white text-center mx-48 mt-2'>Failed</div>
          ) : ( <div className='bg-green-500 text-white text-center mx-48 mt-2'>Success</div>)}
        </p>
      </Card>
    );
  };
  
  export default SingleSpaceFlightCard