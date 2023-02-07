import React from 'react'

type Props = {
    texto?: string
}

export default function TestHello({ texto }: Props) {
    return (
        <div>TestHello {texto}</div>
    )
}

// https://stackoverflow.com/questions/43411864/how-to-install-package-from-github-repo-in-yarn
// https://betterprogramming.pub/how-to-create-and-publish-react-typescript-npm-package-with-demo-and-automated-build-80c40ec28aca