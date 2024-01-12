"use client"

import { ClipLoader } from "react-spinners"

export const Loading = () => {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <ClipLoader color="foreground" size={50} />
        </div>
    )
}