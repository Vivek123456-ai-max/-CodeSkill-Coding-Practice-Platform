import { Problem } from '../../types/problem';
import { CPP_ERRORS_PROBLEMS } from './cppErrors';
import { CPP_DEBUGGING_PROBLEMS } from './cppDebugging';
import { CPP_EXCEPTIONS_PROBLEMS } from './cppExceptions';
import { INPUT_VALIDATION_PROBLEMS } from './inputValidation';
import { DATA_STRUCTURES_STL_PROBLEMS } from './dataStructuresStl';
import { VECTORS_PROBLEMS } from './vectors';
import { CPP_LIST_PROBLEMS } from './cppList';
import { STACKS_PROBLEMS } from './stacks';
import { QUEUES_PROBLEMS } from './queues';
import { CPP_DEQUE_PROBLEMS } from './cppDeque';
import { SETS_PROBLEMS } from './sets';
import { MAPS_PROBLEMS } from './maps';
import { ITERATORS_PROBLEMS } from './iterators';
import { ALGORITHMS_PROBLEMS } from './algorithms';

export {
  CPP_ERRORS_PROBLEMS,
  CPP_DEBUGGING_PROBLEMS,
  CPP_EXCEPTIONS_PROBLEMS,
  INPUT_VALIDATION_PROBLEMS,
  DATA_STRUCTURES_STL_PROBLEMS,
  VECTORS_PROBLEMS,
  CPP_LIST_PROBLEMS,
  STACKS_PROBLEMS,
  QUEUES_PROBLEMS,
  CPP_DEQUE_PROBLEMS,
  SETS_PROBLEMS,
  MAPS_PROBLEMS,
  ITERATORS_PROBLEMS,
  ALGORITHMS_PROBLEMS,
};

export const STL_1400_PROBLEMS: Problem[] = [
  ...CPP_ERRORS_PROBLEMS,
  ...CPP_DEBUGGING_PROBLEMS,
  ...CPP_EXCEPTIONS_PROBLEMS,
  ...INPUT_VALIDATION_PROBLEMS,
  ...DATA_STRUCTURES_STL_PROBLEMS,
  ...VECTORS_PROBLEMS,
  ...CPP_LIST_PROBLEMS,
  ...STACKS_PROBLEMS,
  ...QUEUES_PROBLEMS,
  ...CPP_DEQUE_PROBLEMS,
  ...SETS_PROBLEMS,
  ...MAPS_PROBLEMS,
  ...ITERATORS_PROBLEMS,
  ...ALGORITHMS_PROBLEMS,
];
