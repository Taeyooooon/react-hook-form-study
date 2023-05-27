import { Data } from '@/app/page';
import ArrayOfArray from '@/components/ArrayOfArray';
import MuiTextField from '@/components/MuiTextField';
import { Control, useFieldArray } from 'react-hook-form';

interface Props {
  control: Control<Data>;
  nestIndex: number;
}

const Array = ({ control, nestIndex }: Props) => {
  const {
    fields: skillFields,
    append,
    remove,
  } = useFieldArray({
    control,

    // TODO: 타입 확인
    name: `arrayDataOne.${nestIndex}.skills` as any,
  });

  return (
    <>
      <p className=' font-bold text-xl mb-4'>Array Wrapper</p>
      <div>
        <span>Name : </span>
        <MuiTextField
          control={control}
          name={`arrayDataOne[${nestIndex}].name`}
          rules={{
            required: '필수',
          }}
        />
      </div>
      <ul className=' m-4 p-4 border border-green-800'>
        <p className=' font-semibold text-lg'>Skills Array Wrapper</p>
        {skillFields.map((field, skillIndex, arr) => {
          return (
            <ArrayOfArray
              key={field.id}
              arr={arr}
              control={control}
              nestIndex={nestIndex}
              field={field}
              remove={remove}
              skillIndex={skillIndex}
            />
          );
        })}
        <button
          type='button'
          onClick={() => {
            append({ name: '' });
          }}
          className=' bg-blue-400'
        >
          Append Skill
        </button>
      </ul>
    </>
  );
};
export default Array;
