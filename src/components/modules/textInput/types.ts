export type TText = {
    className: string,
    label: string,
    name: string,
    type: string,
    placeholder: string
    required: boolean,
    value: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}