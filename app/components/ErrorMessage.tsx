import { Text } from "@radix-ui/themes";
import { PropsWithChildren, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <Text color="red" as="p">
      {children}
    </Text>
  );
};
