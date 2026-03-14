import {
	Field,
	FieldContent,
	FieldDescription,
	FieldGroup,
	FieldLabel,
	FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function CreateExpenseForm() {
	return (
		<form action="#">
			<FieldSet>
				<FieldGroup>
					<Field>
						<FieldLabel htmlFor="amount">Amount</FieldLabel>
						<FieldDescription>How much did you spend?</FieldDescription>
						<Input type="number" name="amount" id="amount" />
					</Field>
					<Field>
						<FieldLabel htmlFor="note">Note</FieldLabel>
						<FieldDescription>What was it for?</FieldDescription>
						<Input type="text" name="note" id="note" />
					</Field>
					<Field orientation="horizontal">
						<Button type="submit">Submit</Button>
					</Field>
				</FieldGroup>
			</FieldSet>
		</form>
	)
}
