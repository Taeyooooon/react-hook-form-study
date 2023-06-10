'use client';

import { Control } from 'react-hook-form';
import dynamic from 'next/dynamic';
import FirstArrayForm from '@/components/FirstArrayForm';

interface Props {
  handleSubmit: any;
  control: Control<any>;
  resetField: any;
}

// Devtool hydration에러 dynamic import로 해결
const DevTool: React.ElementType = dynamic(
  () => import('@hookform/devtools').then((module) => module.DevTool),
  { ssr: false }
);

const Form = ({ handleSubmit, control, resetField }: Props) => {
  const onSubmit = (data: any) => {
    console.log('SUBMIT DATA', data);
  };

  return (
    <>
      <h1 className=' font-bold text-2xl'>React Hook Form Nested Array</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=' max-w-xl m-4 p-4 border-4 border-black'
      >
        <FirstArrayForm control={control} resetField={resetField} />
      </form>
      <button type='submit' className=' bg-blue-300'>
        Submit
      </button>

      <DevTool control={control} />
    </>
  );
};
export default Form;
