import JSTypes from "../articles/JSTypes";
import ArrayMethods from "../articles/ArrayMethods";
import type { FC } from "react";
import OperatorsAndLoops from "../articles/OperatorsAndLoops";

export type ArticlesMap = {
  // [key: string] = typ obiektu typu string FC = component
  [key: string]: FC;
};

export const articlesMap: ArticlesMap = {
  js_types: JSTypes,
  array_methods: ArrayMethods,
  operators_and_loops: OperatorsAndLoops,
};
