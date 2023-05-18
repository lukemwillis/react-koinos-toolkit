import { useColorModeValue, ResponsiveValue, Button } from "@chakra-ui/react";
import React, { ComponentType, useState } from "react";

interface CTAProps {
  size: ResponsiveValue<string>;
  onClick: () => void;
  label: string;
  secondary?: boolean;
  disabled?: boolean;
  loading?: boolean;
}
export default React.forwardRef(function CTA(
  {
    size,
    onClick,
    label,
    secondary,
    disabled = false,
    loading = false
  }: CTAProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const [hover, setHover] = useState(false);
  const buttonBackground = useColorModeValue("brand.navy", "brand.orange");
  const buttonForeground = useColorModeValue("brand.orange", "white");
  return (
    <Button
      variant={secondary ? "outline" : "solid"}
      width={{ base: "100%", sm: "auto"}}
      minWidth="unset"
      fontWeight="bold"
      background={secondary ? "transparent" : buttonBackground}
      borderColor={buttonBackground}
      color={secondary ? buttonBackground : "white"}
      borderWidth="2px"
      boxSizing="border-box"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      _hover={{
        background: "transparent",
        borderColor: buttonForeground,
        borderWidth: "2px",
        color: buttonForeground,
      }}
      size={size}
      onClick={onClick}
      ref={ref}
      isDisabled={disabled}
      isLoading={loading}
    >
      {label}
    </Button>
  );
});
