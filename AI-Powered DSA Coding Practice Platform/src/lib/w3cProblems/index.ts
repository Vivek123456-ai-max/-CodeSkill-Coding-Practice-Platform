import { Problem } from '../../types/problem';
import { BOOLEAN_PROBLEMS } from './booleans';
import { IF_ELSE_PROBLEMS } from './ifElse';
import { SWITCH_PROBLEMS } from './switch';
import { WHILE_LOOP_PROBLEMS } from './whileLoop';
import { FOR_LOOP_PROBLEMS } from './forLoop';
import { BREAK_CONTINUE_PROBLEMS } from './breakContinue';
import { ARRAY_PROBLEMS } from './arrays';
import { STRUCTURE_PROBLEMS } from './structures';
import { ENUM_PROBLEMS } from './enums';
import { REFERENCE_PROBLEMS } from './references';
import { POINTER_PROBLEMS } from './pointers';

export const W3C_1100_PROBLEMS: Problem[] = [
  ...BOOLEAN_PROBLEMS,
  ...IF_ELSE_PROBLEMS,
  ...SWITCH_PROBLEMS,
  ...WHILE_LOOP_PROBLEMS,
  ...FOR_LOOP_PROBLEMS,
  ...BREAK_CONTINUE_PROBLEMS,
  ...ARRAY_PROBLEMS,
  ...STRUCTURE_PROBLEMS,
  ...ENUM_PROBLEMS,
  ...REFERENCE_PROBLEMS,
  ...POINTER_PROBLEMS,
];

console.log(`Loaded ${W3C_1100_PROBLEMS.length} W3C C++ Practice Problems.`);
