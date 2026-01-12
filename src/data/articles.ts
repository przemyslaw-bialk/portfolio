import JSTypesPL from "../articles/JSTypesPL";
import ArrayMethodsPL from "../articles/ArrayMethodsPL";
import type { FC } from "react";
import OperatorsAndLoopsPL from "../articles/OperatorsAndLoopsPL";
import ExecutionContextEN from "../articles/ExecutionContextEN";
import PrimitiveTypesAndOperatorsEN from "../articles/PrimitiveTypesAndOperatorsEN";
import ObjectsAndFunctionsEn from "../articles/ObjectsAndFunctionsEN";
import ObjectOrientedJavaScriptEN from "../articles/ObjectOrientedJavaScriptEN";
import AsyncAwaitEN from "../articles/AsyncAwaitEN";
import IteratorsEN from "../articles/IteratorsEN";
import Test from "../articles/Test";

export type ArticlesMap = {
  // [key: string] = typ obiektu typu string FC = component
  [key: string]: FC;
};

export const articlesMap: ArticlesMap = {
  js_types_PL: JSTypesPL,
  array_methods_PL: ArrayMethodsPL,
  operators_and_loops_PL: OperatorsAndLoopsPL,
  execution_context_EN: ExecutionContextEN,
  primitive_types_and_operators_EN: PrimitiveTypesAndOperatorsEN,
  objects_and_functions_EN: ObjectsAndFunctionsEn,
  object_oriented_java_script_EN: ObjectOrientedJavaScriptEN,
  async_await_EN: AsyncAwaitEN,
  iterators_EN: IteratorsEN,
  test: Test,
};
