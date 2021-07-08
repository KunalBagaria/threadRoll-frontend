import { useLottie } from "lottie-react";

export const Animation = ({ json }) => {
    const options = {
        animationData: json,
        loop: true,
        autoplay: true,
    }
    const { View } = useLottie(options)
    return View
}