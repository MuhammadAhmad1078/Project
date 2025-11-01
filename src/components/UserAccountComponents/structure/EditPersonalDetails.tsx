import React from 'react'
import { Form } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { ButtonSecondary, ButtonSecondaryOutline, MyDatePicker, MyInput, MySelect } from '@/components/commoncomponents'


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
    const form = useForm<FormValues>()

    const onSubmit = (data: FormValues) => {
        console.log('Form data:', data)
    }
    // const [date, setDate] = useState<Date | null>(null);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-6">
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
                        <ButtonSecondaryOutline className='rounded-xs' onClick={()=>setEdit(false)}>
                            Cancel
                        </ButtonSecondaryOutline>
                        <ButtonSecondary type='submit' className='rounded-xs'>
                            Save
                        </ButtonSecondary>
                    </div>                    
                </div>
            </form>
        </Form>
    )
}

export {EditPersonalDetails}