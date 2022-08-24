import { Button } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

function Btn({palceholder = "SHOP NOW", arrow = false}){
    return(
        <Button palceholder={palceholder} rightIcon={arrow? ArrowRightIcon : null}/>
    )
}

export default Btn;