"use client";
import Lottie from "react-lottie-player";

const LottiePlayer = ({ Animation }: { Animation: object }) => {
  return (
    <Lottie loop animationData={Animation} play className="!size-[300px]" />
  );
};

export default LottiePlayer;
