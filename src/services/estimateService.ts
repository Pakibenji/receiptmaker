import { Estimate } from '../App';

export class EstimateService {
    estimateCollection;

    constructor(EstimateCollection: Estimate[]) {
        this.estimateCollection = EstimateCollection;
    }

    createEstimate(data: Estimate) {
        this.estimateCollection = [data, ...this.estimateCollection];
    }
    readEstimate(): Estimate[] {
        return this.estimateCollection;
    }
}