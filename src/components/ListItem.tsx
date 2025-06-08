import Link from 'next/link'
import React from 'react'

import type { User } from '../interfaces'

type Props = {
    data: User
}

const ListItem = ({ data }: Props) => (
    <Link href="/users/[id]" as={`/users/${data.id}`}>
        {data.id}:{data.name}
    </Link>
)

export default ListItem
