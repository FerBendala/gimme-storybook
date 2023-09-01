declare module '*.svg' {
    import React from 'react'

    const content: React.ComponentType<React.SVGProps<SVGSVGElement>>
    export default content
}
