import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

export type TControl<T extends FieldValues> = {
  // control: Control<T>;
  control: any;
  name: FieldPath<T>;
  buttonType?: 'primary' | 'secondary' | 'default';
  rules?: Omit<
    RegisterOptions<T>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
};

// export type TForm = CompanyForm;
