import bootcamperNameReducer from '../../libs/functions/bootcamperNameReducer';
import {
  sortRecapData,
  sortMasteryData,
} from '../../libs/functions/sortFeedbackData';

export default function useGraphSelect(state, action) {
  switch (action.type) {
    case 'new session':
      //sets bootcamper names for the dropdown menu and removes duplicates
      let tempArray = action.payload;
      let newBootcamperArray = tempArray
        .map((bootcamper) => {
          return bootcamper.name;
        })
        .filter(function (elem, index, self) {
          return index === self.indexOf(elem);
        })
        .reduce(bootcamperNameReducer, []);
      return { ...state, bootcampersArr: [...newBootcamperArray] };
    case 'name selected':
      //filters feedback when a name is selected

      return {
        ...state,
        bootcamperName: action.payload.bootcamperName,
        recapFeedbackData: sortRecapData(
          action.payload.bootcamperName,
          action.payload.session.data
        ),
        masteryFeedbackData: sortMasteryData(
          action.payload.bootcamperName,
          action.payload.session
        ),
      };
    case 'week selected':
      //changes the feedback displayed in the table
      return { ...state, selectedData: action.payload };
    default:
      throw new Error();
  }
}
