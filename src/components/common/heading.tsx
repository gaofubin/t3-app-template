import React from "react";
import { useRouter } from "next/router";
import { NavItems } from "@/components/constants/side-nav";

export const Heading = () => {
    const router = useRouter();

    const getTitle = () => {
        let title = "";
        NavItems.forEach((item) => {
            if (item.href === router.pathname) {
                title = item.title;
            } else if (item.isChidren) {
                const childItem = item.children?.find(
                    (child) => child.href === router.pathname
                );
                if (childItem) {
                    title = childItem.title;
                }
            }
        });
        return title;
    };

    return (
        <div className="mb-4 rounded border px-4 py-3 text-xl font-semibold shadow">
            {getTitle()}
        </div>
    );
};