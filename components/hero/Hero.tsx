"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";
import { cn } from "@/lib/utils";
import Button from "../ui/button/Button";
import { Loader2, X } from "lucide-react";
import DownloadOptions from "../downloadOptions/DownloadOptions";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const optionsRef = useRef<HTMLDivElement>(null);
  // URL Validation Checker
  const isValidUrl = (url: string) => {
    const urlPattern = /^(https?:\/\/)?(www\.)?([\da-z.-]+\.[a-z.]{2,6})\/?.*$/;
    return urlPattern.test(url);
  };

  const PasteLink = async () => {
    const copyText = await navigator.clipboard.readText();
    setUrl(copyText);
    if (!isValidUrl(copyText)) {
      setError("URL is not supported");
      setLoading(false);
      setShowDownloadOptions(false);
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowDownloadOptions(true);
    }, 2000);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputUrl = e.target.value;
    setUrl(inputUrl);

    if (!isValidUrl(inputUrl)) {
      setError("URL is not supported");
      setLoading(false);
      setShowDownloadOptions(false);
    } else {
      setError("");
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowDownloadOptions(true);
      }, 2000);
    }
  };

  const handleClearLink = () => {
    setUrl("");
    setError("");
    setLoading(false);
    setShowDownloadOptions(false);
  };
  useEffect(() => {
    if (showDownloadOptions && optionsRef.current) {
      optionsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        window.scrollBy({ top: -30, behavior: "smooth" });
      }, 300);
    }
  }, [showDownloadOptions]);

  return (
    <section className={cn("mt-[60px] px-6 ", styles.hero)}>
      <div className='flex items-center gap-1 flex-col max-[809px]:max-w-[634px] max-[809px]:w-full w-[634px]'>
        <h1 className='!font-medium text-[32px] !text-center'>
          Take Youtube Offline
        </h1>
        <p className='text-center text-xl leading-[32px] w-full'>
          Tubecut lets you easily download and trim <br />
          YouTube videos for free high quality.
        </p>
      </div>
      <div ref={optionsRef}>
        <div className={styles.input}>
          <input
            type='text'
            name='text'
            value={url}
            onChange={handleUrlChange}
            id='text'
            placeholder='https://www.youtube.com/watch?v=DKpzCm_nxTo'
            className='bg-transparent border-none w-full h-full outline-none'
          />
          <span
            onClick={handleClearLink}
            className={cn(
              "ml-1 opacity-0 transition-opacity duration-300 pointer-events-none ",
              url !== "" &&
                "opacity-70 cursor-pointer pointer-events-auto hover:opacity-100"
            )}
          >
            <X size={24} />
          </span>
        </div>
        {error && (
          <p className='mt-2 pl-1 !text-[#e92525] !font-medium'>{error}</p>
        )}
        <div
          className={cn(
            "transition-all duration-1000 ease-in-out overflow-hidden ",
            showDownloadOptions
              ? "max-h-[800px] max-[650px]:max-h-[900px] pb-6"
              : "max-h-0"
          )}
        >
          <DownloadOptions />
        </div>
        <Button onClick={PasteLink}>
          {loading && <Loader2 size={24} className='animate-spin mr-2' />}
          {loading
            ? "Processing..."
            : showDownloadOptions
            ? "Try New Video"
            : "Paste Link"}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
