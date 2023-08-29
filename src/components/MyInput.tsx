import { TextField, TextFieldPropsSizeOverrides, TextFieldVariants } from "@mui/material";

interface MyInputProps {
    name: string;
    label: string;
    variant: TextFieldVariants | undefined;
    size: TextFieldPropsSizeOverrides | undefined | any;
    isRequired: boolean | undefined;
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value? : string;
}

const MyInput = ({ name, label, variant, size, isRequired, handleChange, value }: MyInputProps) => {

    return (
        <TextField
            name={name}
            label={label}
            variant={variant}
            onChange={handleChange}
            size={size}
            required={isRequired}
            value={value}
        />
    )
}

export default MyInput;