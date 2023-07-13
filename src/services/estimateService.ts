import { Estimate } from '../App';

export class EstimateService {
    estimateCollection;

    constructor(EstimateCollection: Estimate[]) {
        this.estimateCollection = EstimateCollection;
    }

    createEstimate(data: Estimate) {
        if (data.id === undefined) {
            data.id = Math.random().toString(3
            );
        }
        this.estimateCollection = [data, ...this.estimateCollection];
    }
    readEstimate(): Estimate[] {
        return this.estimateCollection;
    }

    getEstimateByID(id: string): Estimate | undefined {
        const result = this.estimateCollection.find((est) => est.id === id);
        if (result === undefined) {
            return undefined;
        }
        return result
    }
}