import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {action, actionWithWindow} from "./actions";
import {ACTION, ACTION_WITH_WINDOW} from "./constants";

const App = () => {
    const dispatch = useDispatch();

    const valueFromAction = useSelector((state) => state[ACTION]);

    const valueFromActionWithWindow = useSelector((state) => state[ACTION_WITH_WINDOW]);

    const onAction = useCallback(() => {
        dispatch(action());
    }, [dispatch])

    const onActionWithWindow = useCallback(
        () => {
            dispatch(actionWithWindow());
            // THIS BREAKS USESELECTOR, CHANGE DISPATCHED IN THIS CALLBACK AND ALSO ANY SUBSEQUENT DISPATCH GET INTO STORE, BUT ARE NOT PROPAGATED TO COMPONENT
            window.open();
        }, [dispatch]
    )

    return (
        <>
            <div>
                <button onClick={onAction}>action</button>
                <span>value: {valueFromAction}</span>
            </div>
            <div>
                <button onClick={onActionWithWindow}>action with window.open()</button>
                <span>value: {valueFromActionWithWindow}</span>
            </div>
        </>
    )
}

export default App;