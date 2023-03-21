import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from 'store/filters/filter-selectors';
import { clearFilter, removeFilter } from 'store/filters/filter-actions';


const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilters);

  if (currentFilter.length === 0 ){
    return null
  } else  {
    return (
      <Card className="filter-panel">
        <div className="filter-panel-wrapper">
          <Stack>
            {currentFilter.map(filter=>(
              
              <Badge variant="clearable" 
                key={filter}
                onClear = {()=>{dispatch(removeFilter(filter))}}
              > {filter}
              </Badge>)
            )}
          </Stack>
  
          <button className='link'
            onClick={()=> dispatch(clearFilter())}
          >Clear</button>
        </div>
      </Card>
    )
  }
 
}

export {FilterPanel};