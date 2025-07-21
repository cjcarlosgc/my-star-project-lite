import { PublicWrapperProps } from "@/types/public-wrapper-props";
import styles from './public-layout.module.sass';
import Image from 'next/image';

export const PublicLayout = (props: PublicWrapperProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Image
                    src={'https://i.imgur.com/NUrB5vY.png'}
                    alt="Logo"
                    className={styles.logo}
                    width={150}
                    height={150}
                    placeholder='blur'
                    blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABWAFYDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAMEBQIBB//EABwQAAMBAQEBAQEAAAAAAAAAAAACAwEhMQQREv/EABgBAQEBAQEAAAAAAAAAAAAAAAEAAgME/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8A+htvBFBmsIqx5XVLbSC2llmM+zCE7708XenDt05VukFstLJaZ0mLZMRXz0pXSObFKMSOwDnNAi81hFGDWEVcgRdjPu5TdzNu5Iqj9OVp0RSnReU6RkacqF0XMeNC+Dkca0nKUYz5OVIwhXjAJxgAOGbgirHe6IpohJdvTN+hvS++mZ9G+gYiq/RWU6Ft6IzemNdeY0YuaMH8MeG+Gn8++GorGrFiubGfHSyemnOqcYBebwCZdaIoUbgmmAWffDO+jPTUsvpn3UKoyrL0Ri9Lqp0Tk+mK6817FTRhnhLJC+KmorVkSuZNLCtMNOdMwD3MAmTtwRTCrcE0wyUFlILKadcIqqJZtE6L/jpW6i8XoNPJoWxUTNSuSkNUSUpTBU8KEwQ6zAOswCBuiaAAFLUiqAEkrnH50AImzwrkAEFcyhAAQZgABJ//2Q=='
                />
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
            <footer className={styles.footer}>
                © 2025 Mi Proyecto. All rights reserved.
            </footer>
        </div>
    )
}