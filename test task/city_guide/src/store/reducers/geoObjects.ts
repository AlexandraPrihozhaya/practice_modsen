import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IIcon } from '../../constants/categories';

interface GeoObjectsState {
    geoObjects: any;
    isLoading: boolean;
    error: string;
    coordinates: Array<number>
    radius: number,
    selectedCategories: Array<IIcon>,
    searchAddress: string
}

const initialState: GeoObjectsState = {
    geoObjects: [],
    isLoading: false,
    error: '',
    coordinates: [0,0],
    radius: 0,
    selectedCategories: [],
    searchAddress: ''
};

export const geoObjectsSlice = createSlice({
    name: 'geo_objects',
    initialState,
    reducers: {
        setCoordinates(state, action: PayloadAction<Array<number>>) {
            state.coordinates = action.payload;
        },
        setRadius(state, action: PayloadAction<number>) {
            state.radius = action.payload;
        },
        setSelectedCategories(state, action: PayloadAction<Array<IIcon>>) {
            state.selectedCategories = action.payload;
        },
        geoObjectsFetching(state) {
            state.isLoading = true;
        },
        geoObjectsFetchingSuccess(state, action: PayloadAction<any>) {
            state.isLoading = false;
            state.error = '';
            state.geoObjects = action.payload;
        },
        geoObjectsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        setSearchAddress(state, action: PayloadAction<string>) {
            state.searchAddress = action.payload;
        }
    },
})

export const {
    setCoordinates,
    setRadius,
    setSelectedCategories,
    setSearchAddress
} = geoObjectsSlice.actions;

export default geoObjectsSlice.reducer;
