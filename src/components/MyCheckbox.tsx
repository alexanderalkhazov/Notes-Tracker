import { Checkbox } from "@mui/material";

interface MyCheckBoxProps {
    name: string | undefined;
    edge: false | "start" | "end" | undefined;
    handleChange: (event: React.ChangeEvent) => void;
    isChecked? : boolean;
}

const MyCheckBox = ({name, edge,isChecked,handleChange}: MyCheckBoxProps) => {

    return (
        <Checkbox
            name={name}
            edge={edge}  
            onChange={handleChange}
            checked={isChecked}
        />
    )
}

export default MyCheckBox;