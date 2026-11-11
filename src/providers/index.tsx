"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { useServerInsertedHTML } from "next/navigation";
import { ReactNode, useState } from "react";
import theme from "@/theme";

export function Providers({ children }: { children: ReactNode }) {
  const [cache] = useState(() => {
    const emotionCache = createCache({ key: "css", prepend: true });
    emotionCache.compat = true;
    return emotionCache;
  });

  useServerInsertedHTML(() => {
    const names = Object.keys(cache.inserted);
    if (names.length === 0) return null;

    let styles = "";
    for (const name of names) {
      const value = cache.inserted[name];
      if (typeof value === "string") styles += value;
    }

    for (const name of names) delete cache.inserted[name];

    return <style data-emotion={`${cache.key} ${names.join(" ")}`} dangerouslySetInnerHTML={{ __html: styles }} />;
  });

  return (
    <CacheProvider value={cache}>
      <ChakraProvider theme={theme} resetCSS={false}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
