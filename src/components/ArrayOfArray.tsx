import { Data } from '@/app/page';
import MuiTextField from '@/components/MuiTextField';
import { Control } from 'react-hook-form';

interface Props {
  field: any;
  skillIndex: number;
  nestIndex: number;
  control: Control<Data>;
  remove: any;
  arr: any;
}

const ArrayOfArray = ({
  field,
  skillIndex,
  control,
  nestIndex,
  remove,
  arr,
}: Props) => {
  return (
    <>
      <li key={field.id} className=' m-4 p-4 border border-red-300'>
        <span>Skill : </span>
        <MuiTextField
          control={control}
          name={`arrayDataOne.${nestIndex}.skills.${skillIndex}.name`}
          rules={{
            required: '필수',
          }}
        />
        <button
          onClick={() => {
            if (arr.length === 1) return alert('Need at least one skill');
            remove(skillIndex);
          }}
          className=' bg-red-600 text-white'
        >
          Remove
        </button>
      </li>
    </>
  );
};
export default ArrayOfArray;
