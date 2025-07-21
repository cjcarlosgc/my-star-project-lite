
import { ReactNode } from "react";
import { PrivateLayout } from "@/components/private-layout/private-layout";

export default function Layout(props: {
    children: ReactNode
}) {
    return (
        <PrivateLayout>
            {props.children}
        </PrivateLayout>
    )
}