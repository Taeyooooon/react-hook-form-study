import { Data } from '@/app/page';
import MuiTextField from '@/components/MuiTextField';
import { Control } from 'react-hook-form';

interface Props {
  firstIndex: number;
  secondIndex: number;
  thirdIndex: number;
  control: Control<Data>;
  arr: any;
}

const ThirdArray = ({
  firstIndex,
  secondIndex,
  thirdIndex,
  control,
  arr,
}: Props) => {
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
    </>
  );
};
export default ThirdArray;
