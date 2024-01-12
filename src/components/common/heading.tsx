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
        <div>
            <h2 className="text-3xl font-bold tracking-tight">{getTitle()}</h2>
            <p className="text-sm text-muted-foreground">
                Manage {getTitle().toLowerCase()} for your business
            </p>
        </div>
    );
};