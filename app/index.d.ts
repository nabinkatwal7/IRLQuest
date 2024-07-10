interface commonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errors: any;
  register: any;
  label?: string;
  id: string;
  className?: string;
  tooltip?: boolean;
  tooltipTitle?: string;
  inputType?: string;
  optional?: boolean;
}
