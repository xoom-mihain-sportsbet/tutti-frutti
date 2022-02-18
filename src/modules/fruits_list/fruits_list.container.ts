import React from "react";
import { connect } from "react-redux";
import FruitsList from "./fruits_list";
import { Fruit, TuttiFruttiState } from "./fruits_list.modules";
import { getFruitsListFromAPI } from "../../app/actions/fruits_list";

interface StateProps {
    fruitsList: Fruit[]
    isFetchingFruits: boolean 
    fruitsListHasError: boolean
}

interface DispatchProps {
    getFruitsListFromAPI: typeof getFruitsListFromAPI
}

export interface FruitListProps extends StateProps, DispatchProps {}

function mapStateToProps(state: TuttiFruttiState): StateProps {
    const {fruitsList, isFetchingFruits, fruitsListHasError} = state.fruitsListReducers
    return {fruitsList, isFetchingFruits, fruitsListHasError}
}

const dispatchActions: DispatchProps = {
    getFruitsListFromAPI
}

export const FruitsListContainer = connect<StateProps, DispatchProps, {}, TuttiFruttiState>(mapStateToProps, dispatchActions)(FruitsList);