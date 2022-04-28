export interface Recipe {
    id: number;
    name: string;
    amount: number;
    unit: 'stuks' | 'gram' | 'milliliter';
    description?: string;
}