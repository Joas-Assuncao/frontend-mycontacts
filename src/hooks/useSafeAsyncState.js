import {
    useCallback, useState
} from 'react';
import { useIsMounted } from './useIsMounted';

export function useSafeAsyncState(initialState) {
    const [state, setState] = useState(initialState);

    const isMounted = useIsMounted();

    const setSafeAsyncState = useCallback((newState) => {
        if (isMounted()) {
            setState(newState);
        }
    }, [isMounted]);

    return [state, setSafeAsyncState];
}
