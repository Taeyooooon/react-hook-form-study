'use client';

import Edit from '@/components/Edit';
import View from '@/components/View';
import { useForm } from 'react-hook-form';

export type Data = {
  arrayDataOne: {
    name: string;
    skills: { name: string }[];
  }[];
};

export const INIT_DATA: Data = {
  arrayDataOne: [
    {
      name: '',
      skills: [{ name: '' }],
    },
  ],
};

export default function Home() {
  const { handleSubmit, control, watch, reset } = useForm({
    mode: 'onBlur',
    defaultValues: { ...INIT_DATA },
  });

  const formData = watch();

  console.log('formData : ', formData);

  return (
    <>
      <View formData={formData} />
      <Edit handleSubmit={handleSubmit} control={control} reset={reset} />
    </>
  );
}
