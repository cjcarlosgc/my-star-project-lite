import { PublicLayout } from "@/components/public-layout/public-layout";
import { ReactNode } from "react";

export default function Layout (props: {
    children: ReactNode
}) {
    return (
        <PublicLayout>
            {props.children}
        </PublicLayout>
    )
}