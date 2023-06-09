import { Data } from '@/app/page';
import FirstArray from '@/components/FirstArray';
import { Control, useFieldArray } from 'react-hook-form';

interface Props {
  control: Control<Data>;
  resetField: () => void;
}

const FirstArrayForm = ({ control, resetField }: Props) => {
  const { fields, append } = useFieldArray({
    control,
    name: 'firstArray',
  });
  return (
    <>
      <ul className=' m-4 p-4 border-2 border-red-400'>
        {fields.map((field, index) => {
          return (
            <li key={field.id}>
              <FirstArray
                control={control}
                firstIndex={index}
                resetField={resetField}
              />
            </li>
          );
        })}
        <button
          // TODO: append할때 skill 초기값 수정
          type='button'
          onClick={() =>
            append({
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
            })
          }
          className=' bg-red-400'
        >
          Append FirstArray
        </button>
      </ul>
    </>
  );
};
export default FirstArrayForm;
