'use client';

import Form from '@/components/Form';
import View from '@/components/View';
import { useForm } from 'react-hook-form';

export type Data = {
  firstArray: {
    first: string;
    secondArray: {
      second: string;
      thirdArray: {
        third: string;
      }[];
    }[];
  }[];
};

export const INIT_DATA: Data = {
  firstArray: [
    {
      first: '',
      secondArray: [
        {
          second: '',
          thirdArray: [
            {
              third: '',
            },
          ],
        },
      ],
    },
  ],
};

export default function Home() {
  const { handleSubmit, control, watch, resetField } = useForm({
    mode: 'onSubmit',
    defaultValues: { ...INIT_DATA },
  });

  const formData = watch();

  console.log('formData : ', formData);

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        control={control}
        resetField={resetField}
      />
      {/* <View formData={formData} /> */}
    </>
  );
}
