import React, { PropsWithChildren } from "react";
import ReactLoading from "react-loading";
import { ChevronRight } from "react-feather";
import { Button } from "./styles";

interface ContinueButtonProps extends PropsWithChildren {
  onPress: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ isDisabled, isLoading, onPress }) => {
  return (
    <Button disabled={isDisabled} onClick={onPress} isLoading={isLoading}>
      {isLoading ? (
        <ReactLoading type="spin" color="gray" height={45} width={45} />
      ) : (
        <ChevronRight color={isDisabled ? "gray" : "white"} size={35} />
      )}
    </Button>
  );
};

export { ContinueButton };
