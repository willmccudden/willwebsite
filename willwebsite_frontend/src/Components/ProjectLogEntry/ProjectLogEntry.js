import './ProjectLogEntry.css'

export function ProjectLogEntry(props){
    const pLogEntry = props.pLogEntry;
    const pLogDate = new Date(props.pLogDate).toDateString();

    return(
        <div className='projectLogEntry'>
            <h3>
                {pLogDate}
            </h3>
            <p>
                {pLogEntry}
            </p>
        </div>
    )
}