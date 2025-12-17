import { Link } from 'react-router-dom';

const LearningHooks = () => {
    return (
        <div>
            <h1>Learning React Hooks</h1>
            <p>This page is all about React Hooks</p>
            
            <div style={{margin: '20px 0', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                <Link to="/hooks/useState" style={{padding: '8px 12px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px'}}>useState</Link>
                <Link to="/hooks/useEffect" style={{padding: '8px 12px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '4px'}}>useEffect</Link>
                <Link to="/hooks/useEffectAPI" style={{padding: '8px 12px', backgroundColor: '#17a2b8', color: 'white', textDecoration: 'none', borderRadius: '4px'}}>useEffect API</Link>
                <Link to="/hooks/useRef" style={{padding: '8px 12px', backgroundColor: '#ffc107', color: 'black', textDecoration: 'none', borderRadius: '4px'}}>useRef</Link>
                <Link to="/hooks/useMemo" style={{padding: '8px 12px', backgroundColor: '#6f42c1', color: 'white', textDecoration: 'none', borderRadius: '4px'}}>useMemo</Link>
                <Link to="/hooks/useCallback" style={{padding: '8px 12px', backgroundColor: '#e83e8c', color: 'white', textDecoration: 'none', borderRadius: '4px'}}>useCallback</Link>
                <Link to="/hooks/fakeAPI" style={{padding: '8px 12px', backgroundColor: '#fd7e14', color: 'white', textDecoration: 'none', borderRadius: '4px'}}>Fake API</Link>
            </div>
        </div>
    )
}

export default LearningHooks;