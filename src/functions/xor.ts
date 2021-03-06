import { IFunction, IFunctionResult, IXorRuleOptions } from '../types';

export const xor: IFunction<IXorRuleOptions> = (targetVal, opts) => {
  const results: IFunctionResult[] = [];

  const { properties } = opts;

  if (!targetVal || typeof targetVal !== 'object' || properties.length !== 2) return results;

  const intersection = Object.keys(targetVal).filter(value => -1 !== properties.indexOf(value));
  if (intersection.length !== 1) {
    results.push({
      message: `${properties[0]} and ${properties[1]} cannot both be defined`,
    });
  }

  return results;
};
