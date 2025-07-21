'use client'

import { ErrorProps } from "@/types/error-error-props";
import { useEffect } from "react"
import { CrashError } from '@/components/crash-error/crash-error'

export default function GlobalError(props: ErrorProps) {
    useEffect(() => {
        console.log(`Error global no controlado: ${props.error}`)
    }, [props.error]);
    
    return(
        <CrashError message="Hubo un problema al cargar el contenido"></CrashError>
    )
}