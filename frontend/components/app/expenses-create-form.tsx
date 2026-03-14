import {
	Field,
	FieldContent,
	FieldGroup,
	FieldLabel,
	FieldSet,
} from '../ui/field'

export default function ExpensesCreateForm() {
	return (
		<form action="#">
			<FieldGroup>
				<FieldSet>
					<FieldGroup>
						<Field>
							<FieldLabel>Amount</FieldLabel>
							<FieldContent>
								<input type="number" name="amount" id="amount" />
							</FieldContent>
						</Field>
						<Field>
							<FieldLabel>Note</FieldLabel>
							<FieldContent>
								<input type="text" name="note" id="note" />
							</FieldContent>
						</Field>
					</FieldGroup>
				</FieldSet>
			</FieldGroup>
		</form>
	)
}
