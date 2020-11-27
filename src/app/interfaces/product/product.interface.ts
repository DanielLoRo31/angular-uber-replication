export interface IProduct {
    id: Number;
    image: String;
    title: String;
    score: Number;
    cost: Number;
    like: Boolean;
    category: 'Pizza' | 'Tacos' | 'Pasta' | 'Carne';
}
