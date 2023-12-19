import React from 'react'
import { Heading } from '@/components/common/heading'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { ComboboxForm } from '@/components/page-component/users/combobox-form'
import { useModal } from '@/providers/modal-provider'
import { Modal } from '@/components/common/modal'

const Users = () => {
    const { toggleModal } = useModal()
    return (
        <div className='flex h-full flex-col space-y-4 p-4 pt-6 mdp-8'>
            <div className='flex items-start justify-between'>
                <Heading title='Users' description='Manage users for your business' />
                <Button onClick={toggleModal}>
                    <Plus className='mr-2 h-4 w-4' /> Add New
                </Button>
            </div>
            <Separator />
            <div className='flex-1 rounded'>
                <ComboboxForm />
            </div>
            <Modal type='dialog' title='Create User' description='create a user' />
        </div>
    )
}

export default Users