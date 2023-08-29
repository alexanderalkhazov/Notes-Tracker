import { Button } from "@mui/material"

interface MyButtonProps {
    innerText: string;
    variant: string | undefined | any;
    buttonColor: string | any;
    handleClick: () => void;
}

const MyButton = ({innerText, variant, buttonColor,handleClick}: MyButtonProps) => {

  return (
    <Button variant={variant} color={buttonColor} onClick={handleClick}>
        {innerText}
    </Button>
  )
}

export default MyButton