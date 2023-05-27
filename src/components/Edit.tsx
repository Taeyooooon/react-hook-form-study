'use client';

import { Control, useFieldArray } from 'react-hook-form';
import MuiTextField from './MuiTextField';
import Array from '@/components/Array';
import { INIT_DATA } from '@/app/page';
import dynamic from 'next/dynamic';

interface Props {
  handleSubmit: any;
  control: Control<any>;
  reset: any;
}

const DevTool: React.ElementType = dynamic(
  () => import('@hookform/devtools').then((module) => module.DevTool),
  { ssr: false }
);

const Edit = ({ handleSubmit, control, reset }: Props) => {
  const onSubmit = (data: any) => {
    console.log('SUBMIT DATA', data);
  };
  const { fields, append } = useFieldArray({
    control,
    name: 'arrayDataOne',
  });

  console.log('fields : ', fields);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=' max-w-xl m-4 p-4 border border-blue-600'
      >
        <p>전체</p>
        <ul>
          {fields.map((field, index) => {
            return (
              <li key={field.id} className=' m-4 p-4 border border-yellow-400'>
                <Array control={control} nestIndex={index} />
              </li>
            );
          })}
          <button
            // TODO: append할때 skill 초기값 수정
            // TODO: append할때 error처리 확인
            onClick={() => append({ name: '', skills: [{ name: '' }] })}
            className=' bg-red-400'
          >
            Append ArrayWrapper
          </button>
        </ul>
        <button className=' bg-blue-300'>수정수정수정</button>
        <button
          type='button'
          onClick={() => reset(INIT_DATA)}
          className='p-2 bg-black text-white'
        >
          리셋
        </button>
      </form>

      <DevTool control={control} />
    </>
  );
};
export default Edit;
