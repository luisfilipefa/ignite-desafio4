import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { getImageUrl } from "../../utils/getImageUrl";

interface ContinentBannerProps {
  title: string;
  banner: string;
}

export default function ContinentBanner({
  title,
  banner,
}: ContinentBannerProps) {
  return (
    <Flex
      as="header"
      position="relative"
      align="center"
      justifyContent="center"
      bgImage={`url(${getImageUrl(banner)})`}
      bgSize="cover"
      bgPosition="center"
      h={{ sm: "25vh", lg: "40vh" }}
      _after={{
        content: "''",
        bg: "rgba(0,0,0,0.4)",
        position: "absolute",
        top: "0",
        left: "0",
        w: "100%",
        h: "100%",
      }}
    >
      <Heading color="gray.50" zIndex="popover">
        {title}
      </Heading>
    </Flex>
  );
}
