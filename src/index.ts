import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get('/', (req: Request, res: Response) => {

    const msg = compareTotalExp(Jack.expList, John.expList);

    res.send(msg);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

type Person = { name: string, age: number, travelPlace: string[], expList: string[] };

let Jack: Person = { name: "Jack", age: 30, travelPlace: ["A", "B", "C"], expList: ["10", "20", "30"] };
let John: Person = { name: "John", age: 28, travelPlace: ["E", "F", "G"], expList: ["10", "2", "3", "x"] };

function compareTotalExp(input1: string[], input2: string[]): string {
    console.log("[compareTotalExp]");

    // convert string array to 

    const numList1 = input1.map(Number);
    const numList2 = input2.map(Number);

    console.log(numList1);
    console.log(numList2);

    // filter , use for filter NOT Number out, we can do in several way to protect the error but this is only test another function of array.
    const totalNumList1 = numList1.filter(value => !Number.isNaN(value)).reduce((prev, current) => prev + current, 0);
    const totalNumList2 = numList2.filter(value => !Number.isNaN(value)).reduce((prev, current) => prev + current, 0);

    console.log('total list1: ' + totalNumList1);
    console.log('total list2: ' + totalNumList2);


    if (totalNumList1 > totalNumList2) {
        return "list 1 > list 2"
    }
    else {
        return "list 2 > list 1"
    }


}