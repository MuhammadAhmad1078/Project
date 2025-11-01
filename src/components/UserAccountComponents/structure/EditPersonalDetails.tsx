import React, { useState, useEffect } from 'react'
import { Form } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { ButtonSecondary, ButtonSecondaryOutline, MyDatePicker, MyInput, MySelect } from '@/components/commoncomponents'
import { useMutation } from '@apollo/client'
import { UPDATE_USER_PROFILE } from '@/graphql/mutation/mutations'
import { useAuthStore } from '@/store/useAuthStore'


interface FormValues {
  fullName: string;
  email: string;
  phoneNo: string;
  gender: string;
  birthDate: Date;
}


interface EditProps{
    setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditPersonalDetails: React.FC<EditProps> = ({setEdit}) => {
    const { user } = useAuthStore()
    const [updateUser, { loading, error }] = useMutation(UPDATE_USER_PROFILE)
    const [successMessage, setSuccessMessage] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const form = useForm<FormValues>({
        defaultValues: {
            fullName: user?.userName || '',
            email: user?.email || '',
            phoneNo: '',
            gender: '',
            birthDate: null as any,
        }
    })

    const onSubmit = async (data: FormValues) => {
        // Clear previous messages
        setSuccessMessage('')
        setErrorMessage('')

        // Validation
        if (!data.fullName || data.fullName.length < 2) {
            setErrorMessage('Full name must be at least 2 characters')
            return
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!data.email || !emailRegex.test(data.email)) {
            setErrorMessage('Please enter a valid email address')
            return
        }

        try {
            await updateUser({
                variables: {
                    input: {
                        userName: data.fullName,
                        email: data.email
                    }
                }
            })

            setSuccessMessage('Profile updated successfully')

            // Close edit mode after 1 second
            setTimeout(() => {
                setEdit(false)
            }, 1000)
        } catch (err: any) {
            if (err.message?.includes('token') || err.message?.includes('auth')) {
                setErrorMessage('Session expired. Please log in again.')
            } else if (err.message?.includes('Network')) {
                setErrorMessage('Network error. Please try again.')
            } else {
                setErrorMessage(err.message || 'Something went wrong. Please try again.')
            }
        }
    }
    // const [date, setDate] = useState<Date | null>(null);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-6">
                    {/* Success Message */}
                    {successMessage && (
                        <div className="p-4 bg-green-900/20 border border-green-500 rounded">
                            <p className="text-green-400 text-sm">{successMessage}</p>
                        </div>
                    )}

                    {/* Error Message */}
                    {errorMessage && (
                        <div className="p-4 bg-red-900/20 border border-red-500 rounded">
                            <p className="text-red-400 text-sm">{errorMessage}</p>
                        </div>
                    )}

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-3 text-white'>
                        <MyInput 
                            name="fullName" 
                            label="Full name" 
                            required 
                            message='Please enter full name'

                        />
                        <MyInput 
                            name="email" 
                            label="Email" 
                            required 
                            message='Please enter email'
                        />
                        <MyInput 
                            name="phoneNo" 
                            label="Phone Number" 
                            required 
                            message='Please enter phone number'
                        />
                        <MySelect 
                            name="gender"
                            label="Gender"
                            options={[
                                {
                                    id: 1,
                                    name: 'Male'
                                },
                                {
                                    id: 2,
                                    name: 'Female'
                                }
                            ]}
                            required
                            message="Please select gender"
                            value={form.watch("gender")}
                        />
                        <MyDatePicker 
                            name="birthDate" label="Birthday"
                        />
                    </div>         
                    <div className='flex justify-end gap-5'>
                        <ButtonSecondaryOutline
                            className='rounded-xs'
                            onClick={()=>setEdit(false)}
                            type="button"
                        >
                            Cancel
                        </ButtonSecondaryOutline>
                        <ButtonSecondary
                            type='submit'
                            className='rounded-xs'
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Save'}
                        </ButtonSecondary>
                    </div>                    
                </div>
            </form>
        </Form>
    )
}

export {EditPersonalDetails}