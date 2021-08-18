export default function Reducer1(state = [], action) {
    switch (action.type) {
        case "Action1":
            return action.payload;
            break;
        default:
            return state;
    }

}