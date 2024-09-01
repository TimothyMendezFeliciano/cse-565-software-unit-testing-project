import {Router, Request, Response} from "express";

const router = Router();

router.get('/', (req: Request, res: Response): void => {

    try {
        const heapSortResult = new HeapSort().sort(req.body.data)

        res.status(200).send(heapSortResult);
    } catch (err) {
        console.log('Request', req.body);
        console.error('Error Sorting', err);
    }
})

export {router}