export class HeapSort {
    public sort(arr: Array<number>) {
        const size = arr.length;
        for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
            this.heapify(arr, size, i);
        }

        let j = size - 1;

        while (j >= 1) {
            this.swap(arr, 0, j);
            this.heapify(arr, j, 0);
            j--;
        }
        return arr;
    }

    private heapify(arr: Array<number>, size: number, i: number): void {
        let largest = i;

        let leftLeaf = 2 * i + 1;
        let rightLeaf = 2 * i + 2;
        if (leftLeaf < size && arr[leftLeaf] > arr[largest]) {
            largest = leftLeaf;
        }
        if (rightLeaf < size && arr[rightLeaf] > arr[largest]) {
            largest = rightLeaf;
        }

        if (largest != i) {
            this.swap(arr, i, largest);
            this.heapify(arr, size, largest);
        }
    }

    private swap(arr: Array<number>, a: number, b: number) {
        const tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }
}