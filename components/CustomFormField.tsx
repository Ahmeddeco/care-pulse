'use client'

/* --------------------------------- import --------------------------------- */
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Control } from 'react-hook-form'
import { FormFieldType } from './forms/PatientForm'
import { ReactNode } from 'react'
import Image from 'next/image'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

/* ------------------------------- CustomProps ------------------------------ */
interface CustomProps {
	control: Control<any>
	fieldType: FormFieldType
	name: string
	label?: string
	placeholder?: string
	iconSrc?: string
	iconAlt?: string
	disabled?: boolean
	dateFormat?: string
	showTimeSelect?: boolean
	children?: ReactNode
	renderSkeleton?: (field: any) => ReactNode
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
	/* ------------------------------- desrtuction RenderField props ------------------------------ */
	const {
		control,
		fieldType,
		name,
		children,
		dateFormat,
		disabled,
		iconAlt,
		iconSrc,
		label,
		placeholder,
		renderSkeleton,
		showTimeSelect,
	} = props

	/* --------------------------------- switch --------------------------------- */

	switch (fieldType) {
		case FormFieldType.INPUT:
			return (
				<div className='flex rounded-md border border-dark-500 bg-dark-400'>
					{iconSrc && (
						<Image
							src={iconSrc}
							height={24}
							width={24}
							alt={iconAlt || 'icon'}
							className='ml-2'
						/>
					)}
					<FormControl>
						<Input
							placeholder={placeholder}
							{...field}
							className='shad-input border-0'
						/>
					</FormControl>
				</div>
			)
		case FormFieldType.PHONE_INPUT:
			return (
				<FormControl>
					<PhoneInput
						defaultCountry='EG'
						placeholder={placeholder}
						international
						withCountryCallingCode
						value={field.value}
						onChange={field.onChange}
						className='input-phone'
					/>
				</FormControl>
			)
		case FormFieldType.DATE_PICKER:
			return (
				<div className='flex rounded-md border border-dark-500 bg-dark-400 '>
					<Image
						src={'/assets/icons/calendar.svg'}
						alt={'calendar'}
						width={24}
						height={24}
						className='ml-2'
					/>
					<FormControl>
						<DatePicker
							selected={field.value}
							onChange={(date) => field.onChange(date)}
							dateFormat={dateFormat ?? 'dd/MM/yyyy'}
							showTimeSelect={showTimeSelect ?? false}
							timeInputLabel='Time:'
							wrapperClassName='date-picker'
						/>
					</FormControl>
				</div>
			)
		case FormFieldType.SKELETON:
			return renderSkeleton ? renderSkeleton(field) : null
		default:
			break
	}
}

const CustomFormField = (props: CustomProps) => {
	/* ---------------------------- desrtuction CustomFormField props --------------------------- */
	const {
		control,
		fieldType,
		name,
		label,
		iconSrc,
		children,
		dateFormat,
		disabled,
		iconAlt,
		placeholder,
		renderSkeleton,
		showTimeSelect,
	} = props

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className='flex-1'>
					{fieldType !== FormFieldType.CHECKBOX && label && (
						<FormLabel>{label}</FormLabel>
					)}
					<RenderField field={field} props={props} />
					<FormMessage className='shad-error' />
				</FormItem>
			)}
		/>
	)
}

export default CustomFormField
