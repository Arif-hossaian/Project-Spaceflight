import { Card } from '../../shared/card/Card';

const options = {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
} as any;

const SingleSpaceFlightCard = ({ key, content }: any) => {
  let date = new Date(content.launch_date_utc);
  return (
    <Card key={key} className="hover:shadow-2xl">
      <div className="h-46 w-36 mx-auto max-w-screen-sm flex items-center justify-center">
        <img src={content.links.mission_patch} alt="" className="mb-10" />
      </div>
      <p className="text-center text-gray-500 text-md">
        Launch Date:{' '}
        <span className="font-mono text-gray-700 ml-2">
          {date.toLocaleDateString('en-US', options)}
        </span>
      </p>
      <h1 className="mt-6 text-3xl text-bold text-center text-[#22292f]">
        {content.mission_name}
      </h1>
      <p className="text-center text-sm text-gray-500 mt-2 mb-8">
        {content.rocket.rocket_name}
      </p>
      <p className="text-center text-gray-700 text-sm">
        Launch Status:
        <div
          className="text-center mt-2"
          style={{ display: 'grid', placeItems: 'center' }}
        >
          {content.launch_success === false ? (
            <div className="bg-red-500 font-bold text-white px-2 py-1 rounded-md">
              Failed
            </div>
          ) : (
            <div className="bg-green-500 font-bold text-white px-2 py-1 rounded-md">
              Success
            </div>
          )}
        </div>
      </p>
    </Card>
  );
};

export default SingleSpaceFlightCard;
