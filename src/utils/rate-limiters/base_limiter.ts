import { MetaTransactionRateLimiterResponse } from '../../types';

export abstract class MetaTransactionRateLimiter {
    public abstract async isAllowedAsync(
        apiKey: string,
        takerAddress: string,
    ): Promise<MetaTransactionRateLimiterResponse>;
}
