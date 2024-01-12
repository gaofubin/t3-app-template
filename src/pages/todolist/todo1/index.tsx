import { Heading } from '@/components/common/heading'
import { Modal } from '@/components/common/modal'
import { ComboboxForm } from '@/components/page-component/todolist/combobox-form'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useModal } from '@/providers/modal-provider'
import { Plus } from 'lucide-react'

const Todo1 = () => {
    const { toggleModal } = useModal()
    return (
        <div className='flex h-full flex-col space-y-4 p-4 pt-6 mdp-8'>
            <div className='flex items-start justify-between'>
                <Heading />
                <Button onClick={toggleModal} size="sm">
                    <Plus className='mr-2 h-4 w-4' /> Add New
                </Button>
            </div>
            <Separator />
            <div className='flex-1 rounded'>
                <ComboboxForm />
            </div>
            <Modal type='dialog' title='Create Todo' description='create a todo' />
        </div>
    )
}

export default Todo1