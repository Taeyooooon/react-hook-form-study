import { Data } from '@/app/page';
import MuiTextField from '@/components/MuiTextField';
import { Control } from 'react-hook-form';

interface Props {
  firstIndex: number;
  secondIndex: number;
  thirdIndex: number;
  control: Control<Data>;
  removeThird: (index: number) => void;
  arr: any;
}

const ThirdArray = ({
  firstIndex,
  secondIndex,
  thirdIndex,
  removeThird,
  control,
  arr,
}: Props) => {
  const onRemove = () => {
    if (arr.length < 2) return alert('Need at least one input form');
    removeThird(thirdIndex);
  };

  return (
    <>
      <span>Third : </span>
      <MuiTextField
        control={control}
        name={`firstArray.${firstIndex}.secondArray.${secondIndex}.thirdArray.${thirdIndex}.third`}
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
    </>
  );
};
export default ThirdArray;
