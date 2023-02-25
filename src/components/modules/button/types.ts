export type TButton = {
    loading: boolean;
    success: boolean;
    disabled: boolean;
    name: string;
    onClick: (e: any) => void;
}