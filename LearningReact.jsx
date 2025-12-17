import { useSearchParams, Link } from 'react-router-dom';
import State from './State.jsx';
import Props from './props.jsx';

const LearningReact = () => {
    const [searchParams] = useSearchParams();
    const section = searchParams.get('section');
   
    return (
        <div>
            <h1>Learning React</h1>
            <p>This page is all about Learning React</p>
            
            <div style={{margin: '20px 0'}}>
                <Link to="?section=props" style={{marginRight: '10px', padding: '10px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px'}}>Props</Link>
                <Link to="?section=state" style={{padding: '10px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '4px'}}>State</Link>
            </div>
                 
            {section === 'props' && (
                <>
                    <hr />
                    <h2>Props Example</h2>
                    <Props hi="Hello Sankarii!!" grade="12th" age={18} img="\vite.svg" />
                </>
            )}
        
            {section === 'state' && (
                <>
                    <hr />
                    <h2>State Management</h2>
                    <State />
                </>
            )}
        </div>
    )
}
export default LearningReact; 