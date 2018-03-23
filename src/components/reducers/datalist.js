import {FETCH_DATA_SUCCESS} from '../action/actions';

export default function datalist(state=[], action={}) {
   switch (action.type) {
     case FETCH_DATA_SUCCESS:
        return action.data;
     default:return state;

   }


}
