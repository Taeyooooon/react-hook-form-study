import { Data } from '@/app/page';
import MuiTextField from '@/components/MuiTextField';
import ThirdArray from '@/components/ThirdArray';
import { Control, useFieldArray } from 'react-hook-form';

interface Props {
  firstIndex: number;
  secondIndex: number;
  control: Control<Data>;
  remove: any;
  arr: any;
}

const SecondArray = ({
  firstIndex,
  secondIndex,
  control,
  remove,
  arr,
}: Props) => {
  const { fields: thirdFields, append } = useFieldArray({
    control,
    name: `firstArray.${firstIndex}.secondArray.${secondIndex}.thirdArray`,
  });

  const onRemove = () => {
    if (arr.length === 1) return alert('Need at least one input form');
    remove(secondIndex);
  };

  return (
    <>
      <span>Second : </span>
      <MuiTextField
        control={control}
        name={`firstArray.${firstIndex}.secondArray.${secondIndex}.second`}
        rules={{
          required: '필수',
        }}
      />

      <button
        onClick={onRemove}
        type='button'
        className=' bg-red-600 text-white'
      >
        Remove
      </button>

      <ul className=' m-4 p-4 border-2 border-blue-500'>
        <p className=' font-semibold text-lg'>Third Array</p>
        {thirdFields.map((field, thirdIndex, arr) => {
          return (
            <li key={field.id}>
              <ThirdArray
                arr={arr}
                control={control}
                firstIndex={firstIndex}
                secondIndex={secondIndex}
                thirdIndex={thirdIndex}
              />
            </li>
          );
        })}
        <button
          type='button'
          onClick={() => {
            append({ third: '' });
          }}
          className=' p-1 px-2 bg-blue-500'
        >
          Append Third Array
        </button>
      </ul>
    </>
  );
};
export default SecondArray;
