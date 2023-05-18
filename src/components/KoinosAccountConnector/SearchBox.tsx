import React from "react";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { SearchIcon } from "@chakra-ui/icons";
import CTA from "./CTA";

interface SearchBoxProps {
  placeholder?: string;
  buttonLabel?: string;
  inlineButton?: boolean;
  onSearch?: () => void;
  inputRef?: RefObject<HTMLInputElement>;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  autoFocus?: boolean;
  secondaryCTA?: boolean;
}

export default function SearchBox({
  placeholder,
  buttonLabel = "Search",
  inlineButton = false,
  onSearch = () => {},
  inputRef,
  value = "",
  setValue,
  autoFocus = true,
  secondaryCTA,
}: SearchBoxProps) {
  const [query, internalSetQuery] = useState(value);
  const altRef = useRef<HTMLInputElement>(null);

  const setQuery = (val: string) => {
    if (setValue) {
      setValue(val);
    } else {
      internalSetQuery(val);
    }
  };

  useEffect(() => {
    if (!autoFocus) return;

    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    } else if (altRef.current) {
      altRef.current.focus();
    }
  }, [autoFocus, inputRef, altRef]);

  useEffect(() => {
    internalSetQuery(value);
  }, [value]);

  return (
    <>
      <InputGroup maxWidth="30em">
        <Input
          placeholder={placeholder}
          fontSize="xl"
          size="lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter" && query.length > 0) {
              window.open(`https://kap.domains/search?q=${query}`);
              onSearch();
            }
          }}
          ref={inputRef || altRef}
          _focusVisible={{
            borderColor: useColorModeValue("brand.navy", "white"),
          }}
          paddingRight={inlineButton && query ? "7em" : "16"}
          onFocus={(e) => e.target.select()}
        />
        {!inlineButton && (
          <InputLeftElement
            pointerEvents="none"
            fontSize="lg"
            margin="1"
            color={"gray.500"}
          >
            <SearchIcon />
          </InputLeftElement>
        )}
        <InputRightElement
          pointerEvents={inlineButton && query ? "auto" : "none"}
          fontSize="lg"
          margin="1"
          color={"gray.500"}
          width="auto"
        >
          <Flex gap="2" alignItems="center" paddingRight="2">
            {/* TODO use domain */}
            <Text>.koin</Text>
            {inlineButton && query && (
              <a href={query.length > 0 ? `https://kap.domains/search?q=${query}` : "#"}>
                <CTA
                  size="sm"
                  onClick={onSearch}
                  label={buttonLabel}
                  secondary={secondaryCTA}
                />
              </a>
            )}
          </Flex>
        </InputRightElement>
      </InputGroup>
      {!inlineButton && (
        <a href={query.length > 0 ? `https://kap.domains/search?q=${query}` : "#"}>
          <CTA
            size="lg"
            onClick={onSearch}
            label={buttonLabel}
            secondary={secondaryCTA}
          />
        </a>
      )}
    </>
  );
}
