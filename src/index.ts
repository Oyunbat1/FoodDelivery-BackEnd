import express, { Request, Response } from "express";

const port = 3000;
const app = express();

type Food = {
    id: number;
    foodName: string;
    price: number;
    image: string;
    ingredients: { name: string }[]
};

const Data: Food[] = [{
    id: 1,
    foodName: "MixedRice",
    price: 12000,
    image: "rice.png",
    ingredients: [
        { name: "rice" },
        { name: "meat" }
    ]
},{
    id: 2,
    foodName: "MixedRice",
    price: 12000,
    image: "rice.png",
    ingredients: [
        { name: "rice" },
        { name: "meat" }
    ]
}]

app.get("/", (_req: Request, res: Response) => {
    res.json(Data); 
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
