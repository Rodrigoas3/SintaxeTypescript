// S=> State
// T=> Type
// k=> key
// V=> Value
// E=> Element

type  numOrstr = number | string

React.FC<Props, States>

function useState<S extends numOrstr = string>() {
    let state: S;
  

    function getState() {
        return State;
    
    }
    
    function setState(newState: number | string) {
    
        state = newState;
    }
    
    return {getState, setState};
}




const newState = useState<string>();

newState.setState("foo");
console.log(newState.getState);

newState.setState(123);
console.log(newState.getState);

newState.setState("bla");
console.log(newState.getState);
