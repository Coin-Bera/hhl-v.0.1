import Image from "next/image"
import Link from "next/link"
import React from 'react'

const Logo = ({ ...props }) => {
    return (
        <Link href="/">
            <Image {...props} src="/assets/img/hhl-Logo.svg" alt="Habibi House Labs" />
        </Link>
    )
}

export default Logo