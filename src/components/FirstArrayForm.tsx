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

  const onAppend = () => {
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
    });
  };

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
        <button type='button' onClick={onAppend} className=' bg-red-400'>
          Append FirstArray
        </button>
      </ul>
    </>
  );
};
export default FirstArrayForm;
