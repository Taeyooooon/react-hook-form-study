'use client';

import Form from '@/components/Form';
import View from '@/components/View';
import { useForm, useWatch } from 'react-hook-form';

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
  console.log('HOME render');
  const { handleSubmit, control, watch, resetField } = useForm({
    mode: 'onSubmit',
    defaultValues: { ...INIT_DATA },
  });

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        control={control}
        resetField={resetField}
      />
      <View control={control} />
    </>
  );
}
