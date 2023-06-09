import { Data } from '@/app/page';
import SecondArray from '@/components/SecondArray';
import MuiTextField from '@/components/MuiTextField';
import { Control, useFieldArray } from 'react-hook-form';

interface Props {
  control: Control<Data>;
  firstIndex: number;
  resetField: any;
}

const FirstArray = ({ control, firstIndex, resetField }: Props) => {
  const {
    fields: secondFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: `firstArray.${firstIndex}.secondArray`,
  });

  return (
    <>
      <p className=' font-bold text-xl mb-4'>First Array</p>
      <div>
        <span>First : </span>
        <MuiTextField
          control={control}
          name={`firstArray.${firstIndex}.first`}
          rules={{
            required: '필수',
          }}
        />
      </div>
      <ul className=' m-4 p-4 border-2 border-yellow-500'>
        <p className=' font-semibold text-lg'>Second Array</p>
        {secondFields.map((field, secondIndex, arr) => {
          return (
            <li key={field.id}>
              <SecondArray
                arr={arr}
                control={control}
                firstIndex={firstIndex}
                secondIndex={secondIndex}
                remove={remove}
              />
            </li>
          );
        })}
        <button
          type='button'
          onClick={() => {
            append({
              second: '',
              thirdArray: [
                {
                  third: '',
                },
              ],
            });
          }}
          className=' bg-yellow-500'
        >
          Append Second Array
        </button>
      </ul>
    </>
  );
};
export default FirstArray;
