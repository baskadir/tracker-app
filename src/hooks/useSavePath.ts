import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { reset } from "../redux/features/location/locationSlice";
import { useRouter } from "expo-router";
import { usePath } from "../context/PathContext";


export default () => {
    const { locations, name } = useSelector(
        (state: RootState) => state.location
    );
    const dispatch = useDispatch();
    const router = useRouter();

    const { createPath } = usePath();

    const savePath = () => {
        createPath({
            name,
            locations
        });
        dispatch(reset());
        router.push('/paths/list');
    }

    return [savePath];
}