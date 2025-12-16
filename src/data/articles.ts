import JSTypesPL from "../articles/JSTypesPL";
import ArrayMethods from "../articles/ArrayMethods";
import type { FC } from "react";
import OperatorsAndLoopsPL from "../articles/OperatorsAndLoopsPL";
import ExecutionContextEN from "../articles/ExecutionContextEN";
import PrimitiveTypesAndOperatorsEN from "../articles/PrimitiveTypesAndOperatorsEN";

export type ArticlesMap = {
  // [key: string] = typ obiektu typu string FC = component
  [key: string]: FC;
};

export const articlesMap: ArticlesMap = {
  js_types_PL: JSTypesPL,
  array_methods: ArrayMethods,
  operators_and_loops_PL: OperatorsAndLoopsPL,
  execution_context_EN: ExecutionContextEN,
  primitive_types_and_operators_EN: PrimitiveTypesAndOperatorsEN,
};
