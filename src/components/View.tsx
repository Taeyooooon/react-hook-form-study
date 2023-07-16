import { Data } from '@/app/page';
import { Control, useWatch } from 'react-hook-form';

const View = ({ control }: { control: Control<Data> }) => {
  console.log('VIEW render!');

  const formData = useWatch({ control });

  const formattedData = JSON.stringify(formData, null, 2);

  return (
    <div>
      <h2 className=' text-2xl font-bold py-2'>FORM DATA VISUALIZE 👇</h2>
      <pre className='border bg-black text-white p-4 font-semibold'>
        {formattedData}
      </pre>
    </div>
  );
};
export default View;
