import {Router, Request, Response} from "express";
import {HeapSort} from "../HeapSort";

const router = Router();

router.post('/', (req: Request, res: Response): void => {

    try {
        const heapSortResult = new HeapSort().sort(req.body);
        res.status(200).send(heapSortResult);
    } catch (err) {
        // @ts-ignore
        console.error('Error Sorting', err.message);
    }
})

export {router}