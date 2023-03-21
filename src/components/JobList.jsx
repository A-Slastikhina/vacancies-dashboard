import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import {selectAllPositions, selectVisiblePositions} from "../store/positions/position-selectors";
import { addFilter } from 'store/filters/filter-actions';
import {selectFilters} from '../store/filters/filter-selectors'
const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state)=>{
    return selectVisiblePositions(state, currentFilters)
  });

  const handlerAddFilter = (filter)=>{
    dispatch(addFilter(filter))
  }
  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition 
          key={item.id} 
          {...item} 
          handlerAddFilter = {handlerAddFilter}
        />
      ))}
    </div>
  )
}

export {JobList};