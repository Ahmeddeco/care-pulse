'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl } from '@/components/ui/form'
import CustomFormField from '../CustomFormField'
import SubmitButton from '../SubmitButton'
import { useState } from 'react'
import { UserFormValidation } from '@/lib/validation'
import { useRouter } from 'next/navigation'
import { createUser } from '@/lib/action/patient.action'
import { FormFieldType } from './PatientForm'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { GenderOptions } from '@/constants'

const RegisterForm = ({ user }: { user: User }) => {
	const router = useRouter()

	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof UserFormValidation>>({
		resolver: zodResolver(UserFormValidation),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
		},
	})

	async function onSubmit({
		name,
		email,
		phone,
	}: z.infer<typeof UserFormValidation>) {
		setIsLoading(true)

		try {
			const userData = {
				name,
				email,
				phone,
			}

			const user = await createUser(userData)

			if (user) router.push(`/patients/${user.$id}/register`)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-12 flex-1 '
			>
				<section className='space-y-4'>
					<h1 className='header capitalize'>Welcome 👋</h1>
					<p className='text-dark-700 capitalize'>
						let's know more about yourself.
					</p>
				</section>
				<section className='space-y-6'>
					<div className='mb-9 space-y-1'>
						<h2 className='capitalize sub-header'>personal information</h2>
					</div>
				</section>
				<CustomFormField
					control={form.control}
					fieldType={FormFieldType.INPUT}
					name='name'
					label='Full Name'
					placeholder='Ahmed Mohamed'
					iconSrc='/assets/icons/user.svg'
					iconAlt='name'
				/>

				<div className='flex flex-col gap-6 xl:flex-row'>
					<div className='xl:w-1/2 w-full'>
						<CustomFormField
							control={form.control}
							fieldType={FormFieldType.INPUT}
							name='email'
							label='Email'
							placeholder='ahmedmohamed@email.com'
							iconSrc='/assets/icons/email.svg'
							iconAlt='email'
						/>
					</div>
					<div className='xl:w-1/2 w-full'>
						<CustomFormField
							control={form.control}
							fieldType={FormFieldType.PHONE_INPUT}
							name='phone'
							label='Phone Number'
							placeholder='021 9898-6543'
							iconSrc='/assets/icons/email.svg'
							iconAlt='email'
						/>
					</div>
				</div>
				<div className='flex flex-col gap-6 xl:flex-row'>
					<div className=''>
						<CustomFormField
							control={form.control}
							fieldType={FormFieldType.DATE_PICKER}
							name='birthDate'
							label='Date Of Bitrth'
						/>
					</div>
					<div className=''>
						<CustomFormField
							control={form.control}
							fieldType={FormFieldType.SKELETON}
							name='gender'
							label='Gender'
							renderSkeleton={(field) => (
								<FormControl>
									<RadioGroup
										className='flex gap-6 h-11 xl:justify-between'
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										{GenderOptions.map((option) => (
											<div className='radio-group' key={option}>
												<RadioGroupItem value={option} id={option} />
												<label htmlFor={option} className='cursor-pointer'>
													{option}
												</label>
											</div>
										))}
									</RadioGroup>
								</FormControl>
							)}
						/>
					</div>
				</div>

				<div className='flex flex-col gap-6 xl:flex-row'>
					<div className='xl:w-1/2 w-full'>
						<CustomFormField
							control={form.control}
							fieldType={FormFieldType.INPUT}
							name='address'
							label='Address'
							placeholder='14th Street, New Cairo'
						/>
					</div>
					<div className='xl:w-1/2 w-full'>
						<CustomFormField
							control={form.control}
							fieldType={FormFieldType.INPUT}
							name='occupation'
							label='Occupation'
							placeholder='Software Engineer'
						/>
					</div>
				</div>
				<div className='flex flex-col gap-6 xl:flex-row'>
					<div className='xl:w-1/2 w-full'>
						<CustomFormField
							control={form.control}
							fieldType={FormFieldType.INPUT}
							name='emergencyContactName'
							label='Emergency Contact Name'
							placeholder='Mohamed Ahmed'
						/>
					</div>
					<div className='xl:w-1/2 w-full'>
						<CustomFormField
							control={form.control}
							fieldType={FormFieldType.PHONE_INPUT}
							name='emergencyContactNumber'
							label='Emergency Contact Number'
							placeholder='021 9898-6543'
						/>
					</div>
				</div>
				<section className='space-y-6'>
					<div className='mb-9 space-y-1'>
						<h2 className='capitalize sub-header'>medical information</h2>
					</div>
				</section>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<div className='flex flex-col gap-6 xl:flex-row'></div>
				<SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
			</form>
		</Form>
	)
}

export default RegisterForm
