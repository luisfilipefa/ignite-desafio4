import { IconButton } from "@chakra-ui/button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import React from "react";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();

    router.push("/");
  };

  return (
    <>
      {router.asPath !== "/" && (
        <IconButton
          aria-label="Ir para Home"
          icon={<ChevronLeftIcon />}
          position="absolute"
          left="10"
          bg="none"
          onClick={handleClick}
        />
      )}
    </>
  );
}
