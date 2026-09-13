import { Problem } from '../../types/problem';
import { MEMORY_MGMT_PROBLEMS } from './memoryMgmt';
import { FUNCTION_PROBLEMS } from './functions';
import { FUNC_PARAM_PROBLEMS } from './funcParams';
import { FUNC_OVERLOADING_PROBLEMS } from './funcOverloading';
import { SCOPE_PROBLEMS } from './scope';
import { RECURSION_PROBLEMS } from './recursion';
import { LAMBDA_PROBLEMS } from './lambda';

export const FUNCTION_700_PROBLEMS: Problem[] = [
  ...MEMORY_MGMT_PROBLEMS,
  ...FUNCTION_PROBLEMS,
  ...FUNC_PARAM_PROBLEMS,
  ...FUNC_OVERLOADING_PROBLEMS,
  ...SCOPE_PROBLEMS,
  ...RECURSION_PROBLEMS,
  ...LAMBDA_PROBLEMS,
];

console.log(`Loaded ${FUNCTION_700_PROBLEMS.length} C++ Functions & Memory Management Problems.`);
