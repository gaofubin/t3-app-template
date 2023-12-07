import { Heading } from '@/components/common/heading'

const Children1 = () => {
    return (
        <div className="flex h-full flex-col p-4">
            <Heading />

            <div className="flex-1 rounded border p-4 shadow flex items-center justify-center text-4xl font-bold">
                content
            </div>
        </div>
    )
}

export default Children1