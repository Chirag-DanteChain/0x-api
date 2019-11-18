import * as express from 'express';
import * as HttpStatus from 'http-status-codes';

import { StakingDataService } from '../services/staking_data_service';

export class StakingHandlers {
    private readonly _stakingDataService: StakingDataService;
    public async getStakingPoolsAsync(_req: express.Request, res: express.Response): Promise<void> {
        const [
            currentEpoch,
            nextEpoch,
            stakingPools,
        ] = await Promise.all([
            this._stakingDataService.getCurrentEpochAsync(),
            this._stakingDataService.getNextEpochAsync(),
            this._stakingDataService.getStakingPoolsAsync(),
        ]);
        const response = {
            currentEpoch,
            nextEpoch,
            stakingPools,
        };
        res.status(HttpStatus.OK).send(response);
    }
    constructor(stakingDataService: StakingDataService) {
        this._stakingDataService = stakingDataService;
    }
}
