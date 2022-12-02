import Link from 'next/link'
import React from 'react'
import { FrontendRoutes } from '../enums/routes'

export default function PageNotFound() {
    return (
        <div>
            <h1>Page Not Found</h1>
            <h3>Check to see if you are in the correct page.</h3>
            <Link href={FrontendRoutes.HOME}>Click here to go home</Link>
        </div>
    )
}
