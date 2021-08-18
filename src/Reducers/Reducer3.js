export default function Reducer3(state=[], action){
    switch(action.type){
        case "Action3":
            return action.payload;
            break;
            default:
            return state;
    }
}