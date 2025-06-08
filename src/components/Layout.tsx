import React, { type ReactNode } from 'react'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children }: Props) => <div>{children}</div>

export default Layout
