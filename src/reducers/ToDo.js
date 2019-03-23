export default (state, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, data: [...state.data, action.data] };
        case 'DELETE':
            const DataDeleted = state.data.slice();
            const item = DataDeleted.find(i => i.id === action.id);
            item.deleted = true;
            // DataDeleted.find(i => i.id === action.id).done = false;
            return { data: DataDeleted };
        case 'DONE':
            const DataDone = state.data.slice();
            const item2 = DataDone.find(i => i.id === action.id).done = true;
            // DataDone.find(i => i.id === action.id).deleted = false;
            return { data: DataDone };
        case 'RESTORE':
            const Datarestore = state.data.slice();
            // Datarestore.find(i => i.id === action.id).done = false;
            Datarestore.find(i => i.id === action.id).deleted = false;
            return { data: Datarestore };
        default:
            return state;
    }
};