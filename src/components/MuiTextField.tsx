import { TextField, TextFieldProps } from '@mui/material';
import { FieldValues, useController } from 'react-hook-form';
import { TControl } from '@/types/type';

type TProps<T extends FieldValues> = TextFieldProps & TControl<T>;

const MuiTextField = <T extends FieldValues>({
  control,
  name,
  rules,
}: TProps<T>) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    control,
    name,
    rules,
  });

  return (
    <TextField
      variant='outlined'
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={!!error && error.message}
    />
  );
};
export default MuiTextField;
