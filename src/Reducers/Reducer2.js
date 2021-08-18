export default function Reducer2(state = [], action) {
    switch (action.type) {
        case "Action2":
            return action.payload;
            break;
        default:
            return state;
    }
}